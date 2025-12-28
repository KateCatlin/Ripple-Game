import { useState, useEffect, useCallback } from 'react';
import { getPuzzleForDay, getDayNumber, Puzzle, PuzzleEvent } from '@/data/puzzles';
import { getGameState, saveGameState, updateStatsAfterGame, GameState } from '@/lib/storage';

export interface UseGameStateReturn {
  puzzle: Puzzle;
  dayNumber: number;
  currentEventIndex: number;
  currentEvent: PuzzleEvent | null;
  answers: (boolean | null)[];
  selectedAnswer: number | null;
  showExplanation: boolean;
  isComplete: boolean;
  hintUsed: boolean;
  hintUsedOnEvent: number | null;
  disabledOptions: number[];
  selectAnswer: (index: number) => void;
  nextEvent: () => void;
  useHint: () => void;
  getShareText: () => string;
  getScore: () => { correct: number; total: number };
}

export const useGameState = (): UseGameStateReturn => {
  const [puzzle] = useState<Puzzle>(() => getPuzzleForDay());
  const [dayNumber] = useState<number>(() => getDayNumber());
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [answers, setAnswers] = useState<(boolean | null)[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [hintUsed, setHintUsed] = useState(false);
  const [hintUsedOnEvent, setHintUsedOnEvent] = useState<number | null>(null);
  const [disabledOptions, setDisabledOptions] = useState<number[]>([]);

  // Load saved state on mount
  useEffect(() => {
    const savedState = getGameState();
    
    if (savedState.dayNumber === dayNumber) {
      setCurrentEventIndex(savedState.currentEventIndex);
      setAnswers(savedState.answers);
      setIsComplete(savedState.isComplete);
      setHintUsed(savedState.hintUsed || false);
      setHintUsedOnEvent(savedState.hintUsedOnEvent || null);
      setDisabledOptions(savedState.disabledOptions || []);
      
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
        disabledOptions: [],
      };
      saveGameState(initialState);
    }
  }, [dayNumber]);

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
      disabledOptions,
    };
    saveGameState(state);
  }, [dayNumber, currentEventIndex, answers, isComplete, hintUsed, hintUsedOnEvent, disabledOptions]);

  const currentEvent = puzzle.events[currentEventIndex] || null;

  const selectAnswer = useCallback((index: number) => {
    if (showExplanation || isComplete) return;
    
    const isCorrect = index === currentEvent?.correctIndex;
    setSelectedAnswer(index);
    setShowExplanation(true);
    
    const newAnswers = [...answers, isCorrect];
    setAnswers(newAnswers);
    
    // Check if this was the last event
    if (currentEventIndex >= puzzle.events.length - 1) {
      setIsComplete(true);
      updateStatsAfterGame(newAnswers.filter((a): a is boolean => a !== null));
    }
  }, [showExplanation, isComplete, currentEvent, answers, currentEventIndex, puzzle.events.length]);

  const nextEvent = useCallback(() => {
    if (currentEventIndex < puzzle.events.length - 1) {
      setCurrentEventIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setDisabledOptions([]);
    }
  }, [currentEventIndex, puzzle.events.length]);

  const useHint = useCallback(() => {
    if (hintUsed || !currentEvent || showExplanation) return;
    
    const correctIndex = currentEvent.correctIndex;
    const wrongIndices = [0, 1, 2, 3].filter(i => i !== correctIndex);
    
    // Fisher-Yates shuffle for proper randomization
    const shuffled = [...wrongIndices];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    const toDisable = shuffled.slice(0, 2);
    
    setHintUsed(true);
    setHintUsedOnEvent(currentEventIndex);
    setDisabledOptions(toDisable);
  }, [hintUsed, currentEvent, showExplanation, currentEventIndex]);

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
        const usedHintOnThisEvent = hintUsedOnEvent === i;
        if (correct && usedHintOnThisEvent) {
          return `Event ${i + 1}: 🟡`;
        }
        return `Event ${i + 1}: ${correct ? '✅' : '❌'}`;
      })
      .join('\n');
    
    const hintIndicator = hintUsed ? ' 💡' : '';
    return `Ripple #${dayNumber} 🌊\n${emojis}\nChain Score: ${score.correct}/${score.total}${hintIndicator}\n\nPlay at: ${window.location.origin}`;
  }, [dayNumber, answers, getScore, hintUsed, hintUsedOnEvent]);

  return {
    puzzle,
    dayNumber,
    currentEventIndex,
    currentEvent,
    answers,
    selectedAnswer,
    showExplanation,
    isComplete,
    hintUsed,
    hintUsedOnEvent,
    disabledOptions,
    selectAnswer,
    nextEvent,
    useHint,
    getShareText,
    getScore,
  };
};
