const STORAGE_KEY = 'ripple-game-stats';
const GAME_STATE_KEY = 'ripple-game-state';

export interface GameStats {
  gamesPlayed: number;
  currentStreak: number;
  maxStreak: number;
  eventSuccessRate: number[];  // Success rate per event position
  totalCorrect: number;
  totalEvents: number;
  lastPlayedDate: string | null;
}

export interface GameState {
  dayNumber: number;
  currentEventIndex: number;
  answers: (boolean | null)[];
  isComplete: boolean;
  hasSeenTutorial: boolean;
  hintUsed: boolean;
  hintUsedOnEvent: number | null;
}

const defaultStats: GameStats = {
  gamesPlayed: 0,
  currentStreak: 0,
  maxStreak: 0,
  eventSuccessRate: [0, 0, 0, 0],
  totalCorrect: 0,
  totalEvents: 0,
  lastPlayedDate: null,
};

const defaultGameState: GameState = {
  dayNumber: 0,
  currentEventIndex: 0,
  answers: [],
  isComplete: false,
  hasSeenTutorial: false,
  hintUsed: false,
  hintUsedOnEvent: null,
};

export const getStats = (): GameStats => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return { ...defaultStats, ...JSON.parse(stored) };
    }
  } catch (e) {
    console.error('Error reading stats:', e);
  }
  return defaultStats;
};

export const saveStats = (stats: GameStats): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  } catch (e) {
    console.error('Error saving stats:', e);
  }
};

/**
 * Get game state for today's puzzle (backwards compatible).
 */
export const getGameState = (): GameState => {
  try {
    const stored = localStorage.getItem(GAME_STATE_KEY);
    if (stored) {
      return { ...defaultGameState, ...JSON.parse(stored) };
    }
  } catch (e) {
    console.error('Error reading game state:', e);
  }
  return defaultGameState;
};

/**
 * Get game state for a specific puzzle date.
 * 
 * Storage key structure for per-puzzle completion tracking:
 * - Today's puzzle: Uses the base key for backwards compatibility
 * - Archive puzzles: Uses `ripple-game-state-{YYYY-MM-DD}` keyed by date
 * 
 * This ensures each puzzle can only be played once per user.
 */
export const getGameStateForDate = (puzzleDate: string): GameState | null => {
  const today = new Date().toISOString().split('T')[0];
  const storageKey = puzzleDate === today ? GAME_STATE_KEY : `${GAME_STATE_KEY}-${puzzleDate}`;
  
  try {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      return { ...defaultGameState, ...JSON.parse(stored) };
    }
  } catch (e) {
    console.error('Error reading game state for date:', e);
  }
  return null;
};

/**
 * Save game state for a specific puzzle date.
 */
export const saveGameStateForDate = (puzzleDate: string, state: GameState): void => {
  const today = new Date().toISOString().split('T')[0];
  const storageKey = puzzleDate === today ? GAME_STATE_KEY : `${GAME_STATE_KEY}-${puzzleDate}`;
  
  try {
    localStorage.setItem(storageKey, JSON.stringify(state));
  } catch (e) {
    console.error('Error saving game state for date:', e);
  }
};

export const saveGameState = (state: GameState): void => {
  try {
    localStorage.setItem(GAME_STATE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Error saving game state:', e);
  }
};

/**
 * Update stats after completing the DAILY puzzle.
 * 
 * IMPORTANT: Archive plays DO NOT affect daily streaks!
 * Streaks measure consecutive daily engagement with the daily puzzle,
 * not historical puzzle completions. This function should only be called
 * for today's puzzle completion, not archive plays.
 */
export const updateStatsAfterGame = (answers: boolean[]): void => {
  const stats = getStats();
  const today = new Date().toDateString();
  
  // Check if already played today
  if (stats.lastPlayedDate === today) {
    return;
  }
  
  const correctCount = answers.filter(Boolean).length;
  
  // Update games played
  stats.gamesPlayed += 1;
  stats.totalCorrect += correctCount;
  stats.totalEvents += answers.length;
  
  // Update streak - ONLY for daily puzzles
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  
  if (stats.lastPlayedDate === yesterday.toDateString()) {
    stats.currentStreak += 1;
  } else if (stats.lastPlayedDate !== today) {
    stats.currentStreak = 1;
  }
  
  stats.maxStreak = Math.max(stats.maxStreak, stats.currentStreak);
  stats.lastPlayedDate = today;
  
  // Update per-event success rate (track totals for calculation)
  answers.forEach((correct, index) => {
    if (index < stats.eventSuccessRate.length) {
      const previousTotal = (stats.eventSuccessRate[index] * (stats.gamesPlayed - 1)) / 100;
      const newTotal = previousTotal + (correct ? 1 : 0);
      stats.eventSuccessRate[index] = Math.round((newTotal / stats.gamesPlayed) * 100);
    }
  });
  
  saveStats(stats);
};

export const hasSeenTutorial = (): boolean => {
  return getGameState().hasSeenTutorial;
};

export const markTutorialSeen = (): void => {
  const state = getGameState();
  state.hasSeenTutorial = true;
  saveGameState(state);
};