import { useState, useEffect, useCallback, useMemo } from 'react';
import { getPuzzleForDay, getDayNumber, getPuzzleByDate, getDayNumberForDate, getTodayInPST, isToday, Puzzle, PuzzleEvent } from '@/data/puzzles';
import { getGameStateForDate, saveGameStateForDate, updateStatsAfterGame, GameState } from '@/lib/storage';
import { useAuth } from '@/contexts/AuthContext';
import { hasPlayedPuzzle } from '@/lib/supabaseStats';
import { supabase } from '@/integrations/supabase/client';
import { shuffleWithMapping } from '@/lib/utils';
import { trackEvent } from '@/lib/analytics';

export interface UseGameStateReturn {
  puzzle: Puzzle;
  dayNumber: number;
  puzzleDate: string;
  isArchive: boolean;
  currentEventIndex: number;
  currentEvent: PuzzleEvent | null;
  shuffledOptions: string[];
  shuffledCorrectIndex: number;
  answers: (boolean | null)[];
  selectedAnswer: number | null;
  showExplanation: boolean;
  isComplete: boolean;
  hintUsed: boolean;
  hintUsedOnEvent: number | null;
  eliminatedOptions: number[];
  selectAnswer: (index: number) => void;
  nextEvent: () => void;
  useHint: () => void;
  getShareText: () => string;
  getScore: () => { correct: number; total: number };
}

interface UseGameStateOptions {
  puzzleDate?: string; // Optional date to load specific puzzle (for archive)
}

/**
 * Game state hook that manages puzzle gameplay.
 * 
 * Storage key structure for per-puzzle completion tracking:
 * - Today's puzzle: `ripple-game-state` (backwards compatible)
 * - Archive puzzles: `ripple-game-state-{YYYY-MM-DD}` (keyed by date)
 * 
 * This ensures each puzzle can only be played once per user.
 */
export const useGameState = (options: UseGameStateOptions = {}): UseGameStateReturn => {
  const { user } = useAuth();
  
  // Determine which puzzle to load
  const { puzzle, dayNumber, puzzleDate, isArchive } = useMemo(() => {
    if (options.puzzleDate) {
      const archivePuzzle = getPuzzleByDate(options.puzzleDate);
      if (archivePuzzle) {
        return {
          puzzle: archivePuzzle,
          dayNumber: getDayNumberForDate(options.puzzleDate),
          puzzleDate: options.puzzleDate,
          isArchive: !isToday(options.puzzleDate),
        };
      }
    }
    // Default to today's puzzle
    const todayPuzzle = getPuzzleForDay();
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    return {
      puzzle: todayPuzzle,
      dayNumber: getDayNumber(),
      puzzleDate: todayStr,
      isArchive: false,
    };
  }, [options.puzzleDate]);

  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [answers, setAnswers] = useState<(boolean | null)[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [hintUsed, setHintUsed] = useState(false);
  const [hintUsedOnEvent, setHintUsedOnEvent] = useState<number | null>(null);
  const [eliminatedOptions, setEliminatedOptions] = useState<number[]>([]);
  const [shuffleSeed, setShuffleSeed] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const now = new Date();
    const todayStr = getTodayInPST();
    let nextRefresh = new Date(`${todayStr}T00:00:10-10:00`);

    if (now.getTime() >= nextRefresh.getTime()) {
      nextRefresh = new Date(nextRefresh.getTime() + 24 * 60 * 60 * 1000);
    }

    const delayMs = nextRefresh.getTime() - now.getTime();
    const timerId = window.setTimeout(() => {
      window.location.reload();
    }, delayMs);

    return () => window.clearTimeout(timerId);
  }, []);

  const currentEvent = puzzle.events[currentEventIndex] || null;

  // Shuffle options for the current event
  const { shuffledOptions, shuffledCorrectIndex, indexMap } = useMemo(() => {
    if (!currentEvent) {
      return { shuffledOptions: [], shuffledCorrectIndex: -1, indexMap: [] };
    }
    const { shuffled, indexMap } = shuffleWithMapping(currentEvent.options);
    const correctShuffledIndex = indexMap.findIndex(origIndex => origIndex === currentEvent.correctIndex);
    return {
      shuffledOptions: shuffled,
      shuffledCorrectIndex: correctShuffledIndex,
      indexMap,
    };
  }, [currentEvent, shuffleSeed]);

  // Load saved state on mount and check Supabase for logged-in users
  useEffect(() => {
    const loadState = async () => {
      // Get saved state for this specific puzzle date
      const savedState = getGameStateForDate(puzzleDate);
      
      // If user is logged in, check if they've already played this puzzle in Supabase
      if (user) {
        const playedInSupabase = await hasPlayedPuzzle(user.id, dayNumber);
        
        if (playedInSupabase) {
          // Load their previous result from Supabase
          const { data } = await supabase
            .from('game_results')
            .select('*')
            .eq('user_id', user.id)
            .eq('day_number', dayNumber)
            .maybeSingle();
          
          if (data) {
            setAnswers(data.answers);
            setCurrentEventIndex(data.answers.length - 1);
            setIsComplete(true);
            setHintUsed(data.hint_used);
            setHintUsedOnEvent(data.hint_used_on_event);
            return;
          }
        }
      }
      
      // Fallback to localStorage (keyed by puzzle date)
      if (savedState && savedState.dayNumber === dayNumber) {
        setCurrentEventIndex(savedState.currentEventIndex);
        setAnswers(savedState.answers);
        setIsComplete(savedState.isComplete);
        setHintUsed(savedState.hintUsed);
        setHintUsedOnEvent(savedState.hintUsedOnEvent);
        
        if (savedState.answers.length > savedState.currentEventIndex) {
          setShowExplanation(true);
        }
      } else {
        // New puzzle, reset state
        setCurrentEventIndex(0);
        setAnswers([]);
        setIsComplete(false);
        setHintUsed(false);
        setHintUsedOnEvent(null);
        setShowExplanation(false);
      }
    };
    
    loadState();
  }, [dayNumber, puzzleDate, user]);

  // Save state whenever it changes
  useEffect(() => {
    const state: GameState = {
      dayNumber,
      currentEventIndex,
      answers,
      isComplete,
      hasSeenTutorial: true, // Always true for archive puzzles
      hintUsed,
      hintUsedOnEvent,
    };
    saveGameStateForDate(puzzleDate, state);
  }, [dayNumber, puzzleDate, currentEventIndex, answers, isComplete, hintUsed, hintUsedOnEvent]);

  const selectAnswer = useCallback((index: number) => {
    if (showExplanation || isComplete) return;
    
    const isCorrect = index === shuffledCorrectIndex;
    setSelectedAnswer(index);
    setShowExplanation(true);
    
    const newAnswers = [...answers, isCorrect];
    setAnswers(newAnswers);
    
    const questionNumber = currentEventIndex + 1;
    trackEvent('question_answered', {
      userId: user?.id,
      metadata: { 
        question_number: questionNumber, 
        is_correct: isCorrect,
        day_number: dayNumber,
        is_archive: isArchive,
      }
    });
    
    if (currentEventIndex >= puzzle.events.length - 1) {
      setIsComplete(true);
      
      /**
       * Archive plays DO NOT affect daily streaks.
       * Streaks measure consecutive daily engagement with the daily puzzle.
       * Archive completions are still tracked for history/completions list.
       */
      if (!isArchive) {
        updateStatsAfterGame(newAnswers.filter((a): a is boolean => a !== null));
      }
    }
  }, [showExplanation, isComplete, shuffledCorrectIndex, answers, currentEventIndex, puzzle.events.length, user?.id, dayNumber, isArchive]);

  const nextEvent = useCallback(() => {
    if (currentEventIndex < puzzle.events.length - 1) {
      setCurrentEventIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setEliminatedOptions([]);
      setShuffleSeed(prev => prev + 1);
    }
  }, [currentEventIndex, puzzle.events.length]);

  const useHint = useCallback(() => {
    if (hintUsed || showExplanation || isComplete || !currentEvent) return;
    
    const wrongIndices = shuffledOptions
      .map((_, index) => index)
      .filter(index => index !== shuffledCorrectIndex);
    
    for (let i = wrongIndices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [wrongIndices[i], wrongIndices[j]] = [wrongIndices[j], wrongIndices[i]];
    }
    const toEliminate = wrongIndices.slice(0, 2);
    
    setEliminatedOptions(toEliminate);
    setHintUsed(true);
    setHintUsedOnEvent(currentEventIndex);
  }, [hintUsed, showExplanation, isComplete, currentEvent, shuffledOptions, shuffledCorrectIndex, currentEventIndex]);

  const getScore = useCallback(() => {
    const validAnswers = answers.filter((a): a is boolean => a !== null);
    return {
      correct: validAnswers.filter(Boolean).length,
      total: validAnswers.length,
    };
  }, [answers]);

  const getShareText = useCallback(() => {
    const score = getScore();
    const emojis = answers
      .filter((a): a is boolean => a !== null)
      .map((correct, i) => {
        if (correct && hintUsedOnEvent === i) {
          return `Event ${i + 1}: 🟡 (hint)`;
        }
        return `Event ${i + 1}: ${correct ? '✅' : '❌'}`;
      })
      .join('\n');
    
    const points = answers
      .filter((a): a is boolean => a !== null)
      .reduce((total, correct, index) => {
        if (!correct) return total;
        const usedHintOnThisEvent = hintUsedOnEvent === index;
        return total + (usedHintOnThisEvent ? 50 : 100);
      }, 0);
    
    const hintIndicator = hintUsed ? ' 💡' : '';
    const archiveIndicator = isArchive ? ' (Archive)' : '';
    return `Ripple #${dayNumber}${archiveIndicator} 🌊\n${emojis}\nScore: ${points} points${hintIndicator}\n\nPlay at: ${window.location.origin}`;
  }, [dayNumber, answers, getScore, hintUsed, hintUsedOnEvent, isArchive]);

  return {
    puzzle,
    dayNumber,
    puzzleDate,
    isArchive,
    currentEventIndex,
    currentEvent,
    shuffledOptions,
    shuffledCorrectIndex,
    answers,
    selectedAnswer,
    showExplanation,
    isComplete,
    hintUsed,
    hintUsedOnEvent,
    eliminatedOptions,
    selectAnswer,
    nextEvent,
    useHint,
    getShareText,
    getScore,
  };
};