import { useState, useEffect, useCallback, useMemo } from 'react';
import { getPuzzleForDay, getDayNumber, Puzzle, PuzzleEvent } from '@/data/puzzles';
import { getGameState, saveGameState, updateStatsAfterGame, GameState } from '@/lib/storage';
import { useAuth } from '@/contexts/AuthContext';
import { hasPlayedToday } from '@/lib/supabaseStats';
import { supabase } from '@/integrations/supabase/client';
import { shuffleWithMapping } from '@/lib/utils';

export interface UseGameStateReturn {
  puzzle: Puzzle;
  dayNumber: number;
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

export const useGameState = (): UseGameStateReturn => {
  const { user } = useAuth();
  const [puzzle] = useState<Puzzle>(() => getPuzzleForDay());
  const [dayNumber] = useState<number>(() => getDayNumber());
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [answers, setAnswers] = useState<(boolean | null)[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [hintUsed, setHintUsed] = useState(false);
  const [hintUsedOnEvent, setHintUsedOnEvent] = useState<number | null>(null);
  const [eliminatedOptions, setEliminatedOptions] = useState<number[]>([]);
  const [shuffleSeed, setShuffleSeed] = useState(0); // Used to trigger re-shuffle on next event

  const currentEvent = puzzle.events[currentEventIndex] || null;

  // Shuffle options for the current event
  const { shuffledOptions, shuffledCorrectIndex, indexMap } = useMemo(() => {
    if (!currentEvent) {
      return { shuffledOptions: [], shuffledCorrectIndex: -1, indexMap: [] };
    }
    const { shuffled, indexMap } = shuffleWithMapping(currentEvent.options);
    // Find which shuffled index contains the correct answer
    const correctShuffledIndex = indexMap.findIndex(origIndex => origIndex === currentEvent.correctIndex);
    return {
      shuffledOptions: shuffled,
      shuffledCorrectIndex: correctShuffledIndex,
      indexMap,
    };
  }, [currentEvent, shuffleSeed]); // shuffleSeed dependency ensures re-shuffle on event change

  // Load saved state on mount and check Supabase for logged-in users
  useEffect(() => {
    const loadState = async () => {
      const savedState = getGameState();
      
      // If user is logged in, check if they've already played today in Supabase
      if (user) {
        const playedInSupabase = await hasPlayedToday(user.id, dayNumber);
        
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
      
      // Fallback to localStorage
      if (savedState.dayNumber === dayNumber) {
        setCurrentEventIndex(savedState.currentEventIndex);
        setAnswers(savedState.answers);
        setIsComplete(savedState.isComplete);
        setHintUsed(savedState.hintUsed);
        setHintUsedOnEvent(savedState.hintUsedOnEvent);
        
        // If game was in progress, restore explanation state
        if (savedState.answers.length > savedState.currentEventIndex) {
          setShowExplanation(true);
        }
      } else {
        // New day, reset state
        const initialState: GameState = {
          dayNumber,
          currentEventIndex: 0,
          answers: [],
          isComplete: false,
          hasSeenTutorial: savedState.hasSeenTutorial,
          hintUsed: false,
          hintUsedOnEvent: null,
        };
        saveGameState(initialState);
      }
    };
    
    loadState();
  }, [dayNumber, user]);

  // Save state whenever it changes
  useEffect(() => {
    const state: GameState = {
      dayNumber,
      currentEventIndex,
      answers,
      isComplete,
      hasSeenTutorial: getGameState().hasSeenTutorial,
      hintUsed,
      hintUsedOnEvent,
    };
    saveGameState(state);
  }, [dayNumber, currentEventIndex, answers, isComplete, hintUsed, hintUsedOnEvent]);

  const selectAnswer = useCallback((index: number) => {
    if (showExplanation || isComplete) return;
    
    // Check against shuffled correct index, not original
    const isCorrect = index === shuffledCorrectIndex;
    setSelectedAnswer(index);
    setShowExplanation(true);
    
    const newAnswers = [...answers, isCorrect];
    setAnswers(newAnswers);
    
    // Check if this was the last event
    if (currentEventIndex >= puzzle.events.length - 1) {
      setIsComplete(true);
      updateStatsAfterGame(newAnswers.filter((a): a is boolean => a !== null));
    }
  }, [showExplanation, isComplete, shuffledCorrectIndex, answers, currentEventIndex, puzzle.events.length]);

  const nextEvent = useCallback(() => {
    if (currentEventIndex < puzzle.events.length - 1) {
      setCurrentEventIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setEliminatedOptions([]);
      setShuffleSeed(prev => prev + 1); // Trigger new shuffle for next event
    }
  }, [currentEventIndex, puzzle.events.length]);

  const useHint = useCallback(() => {
    if (hintUsed || showExplanation || isComplete || !currentEvent) return;
    
    // Get shuffled indices of wrong answers (not the shuffled correct one)
    const wrongIndices = shuffledOptions
      .map((_, index) => index)
      .filter(index => index !== shuffledCorrectIndex);
    
    // Fisher-Yates shuffle to randomly select 2 wrong answers to eliminate
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
    
    // Calculate points
    const points = answers
      .filter((a): a is boolean => a !== null)
      .reduce((total, correct, index) => {
        if (!correct) return total;
        const usedHintOnThisEvent = hintUsedOnEvent === index;
        return total + (usedHintOnThisEvent ? 50 : 100);
      }, 0);
    
    const hintIndicator = hintUsed ? ' 💡' : '';
    return `Ripple #${dayNumber} 🌊\n${emojis}\nScore: ${points} points${hintIndicator}\n\nPlay at: ${window.location.origin}`;
  }, [dayNumber, answers, getScore, hintUsed, hintUsedOnEvent]);

  return {
    puzzle,
    dayNumber,
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
