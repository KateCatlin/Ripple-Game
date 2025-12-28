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
  selectAnswer: (index: number) => void;
  nextEvent: () => void;
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

  // Load saved state on mount
  useEffect(() => {
    const savedState = getGameState();
    
    if (savedState.dayNumber === dayNumber) {
      setCurrentEventIndex(savedState.currentEventIndex);
      setAnswers(savedState.answers);
      setIsComplete(savedState.isComplete);
      
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
    };
    saveGameState(state);
  }, [dayNumber, currentEventIndex, answers, isComplete]);

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
    }
  }, [currentEventIndex, puzzle.events.length]);

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
      .map((correct, i) => `Event ${i + 1}: ${correct ? '✅' : '❌'}`)
      .join('\n');
    
    return `Ripple #${dayNumber} 🌊\n${emojis}\nChain Score: ${score.correct}/${score.total}\n\nPlay at: ${window.location.origin}`;
  }, [dayNumber, answers, getScore]);

  return {
    puzzle,
    dayNumber,
    currentEventIndex,
    currentEvent,
    answers,
    selectedAnswer,
    showExplanation,
    isComplete,
    selectAnswer,
    nextEvent,
    getShareText,
    getScore,
  };
};
