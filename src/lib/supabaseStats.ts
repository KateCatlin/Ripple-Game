import { supabase } from '@/integrations/supabase/client';
import { getStats, getGameState, GameStats, GameState } from './storage';

export interface SupabaseUserStats {
  user_id: string;
  games_played: number;
  current_streak: number;
  max_streak: number;
  total_correct: number;
  total_events: number;
  total_points: number;
  display_name: string | null;
  last_played_date: string | null;
  updated_at: string;
}

export interface SupabaseGameResult {
  id: string;
  user_id: string;
  day_number: number;
  answers: boolean[];
  hint_used: boolean;
  hint_used_on_event: number | null;
  score: number;
  points: number;
  completed_at: string;
}

export interface LeaderboardEntry {
  user_id: string;
  display_name: string;
  games_played: number;
  total_points: number;
  current_streak: number;
  max_streak: number;
  avg_points: number;
}

export interface DailyStats {
  day_number: number;
  player_count: number;
  avg_points: number;
  perfect_count: number;
}

export interface DailyComparison {
  playerCount: number;
  percentile: number;
  avgPoints: number;
  perfectCount: number;
  perfectPercentage: number;
  userPoints: number;
  isFirst: boolean;
}

// Calculate points from answers and hint usage
export const calculatePoints = (answers: boolean[], hintUsedOnEvent: number | null): number => {
  return answers.reduce((total, correct, index) => {
    if (!correct) return total;
    const usedHintOnThisEvent = hintUsedOnEvent === index;
    return total + (usedHintOnThisEvent ? 50 : 100);
  }, 0);
};

// Get percentile message based on rank
export const getPercentileMessage = (percentile: number, hintUsed: boolean, points: number): string => {
  if (points === 300) {
    return "🎯 Perfect score! No hints needed!";
  }
  
  if (hintUsed && percentile >= 70) {
    return `Top ${100 - Math.floor(percentile)}% even with a lifeline — nice!`;
  }
  
  if (percentile >= 90) {
    return "🌟 Outstanding! You're in the top 10% today!";
  }
  if (percentile >= 75) {
    return "🎯 Great work! Top quarter of players!";
  }
  if (percentile >= 50) {
    return "💪 Above average! Better than most!";
  }
  if (percentile >= 25) {
    return "📈 Room to grow — you beat 25% of players!";
  }
  return "🌱 Tough one! Most players found this tricky too.";
};

// Fetch user stats from Supabase
export const fetchUserStats = async (userId: string): Promise<SupabaseUserStats | null> => {
  const { data, error } = await supabase
    .from('user_stats')
    .select('*')
    .eq('user_id', userId)
    .maybeSingle();
  
  if (error) {
    console.error('Error fetching user stats:', error);
    return null;
  }
  
  return data;
};

// Check if user has played today
export const hasPlayedToday = async (userId: string, dayNumber: number): Promise<boolean> => {
  const { data, error } = await supabase
    .from('game_results')
    .select('id')
    .eq('user_id', userId)
    .eq('day_number', dayNumber)
    .maybeSingle();
  
  if (error) {
    console.error('Error checking if played today:', error);
    return false;
  }
  
  return !!data;
};

// Get daily comparison stats for a user
export const fetchDailyComparison = async (userId: string, dayNumber: number): Promise<DailyComparison | null> => {
  // Get user's result for today
  const { data: userResult, error: userError } = await supabase
    .from('game_results')
    .select('points')
    .eq('user_id', userId)
    .eq('day_number', dayNumber)
    .maybeSingle();

  if (userError || !userResult) {
    console.error('Error fetching user result:', userError);
    return null;
  }

  const userPoints = userResult.points;

  // Get all results for today to calculate percentile
  const { data: allResults, error: allError } = await supabase
    .from('game_results')
    .select('points')
    .eq('day_number', dayNumber);

  if (allError || !allResults) {
    console.error('Error fetching daily results:', allError);
    return null;
  }

  const playerCount = allResults.length;
  
  if (playerCount === 1) {
    return {
      playerCount: 1,
      percentile: 100,
      avgPoints: userPoints,
      perfectCount: userPoints === 300 ? 1 : 0,
      perfectPercentage: userPoints === 300 ? 100 : 0,
      userPoints,
      isFirst: true,
    };
  }

  // Calculate percentile: percentage of players with lower points
  const playersWithLowerPoints = allResults.filter(r => r.points < userPoints).length;
  const percentile = Math.round((playersWithLowerPoints / playerCount) * 100);
  
  const avgPoints = Math.round(allResults.reduce((sum, r) => sum + r.points, 0) / playerCount);
  const perfectCount = allResults.filter(r => r.points === 300).length;
  const perfectPercentage = Math.round((perfectCount / playerCount) * 100);

  return {
    playerCount,
    percentile,
    avgPoints,
    perfectCount,
    perfectPercentage,
    userPoints,
    isFirst: false,
  };
};

// Fetch leaderboard data
export const fetchLeaderboard = async (userId: string): Promise<{
  entries: LeaderboardEntry[];
  userRank: number;
  userEntry: LeaderboardEntry | null;
  totalPlayers: number;
}> => {
  // Get all qualified players (3+ games)
  const { data: allStats, error } = await supabase
    .from('user_stats')
    .select('user_id, games_played, total_points, current_streak, max_streak, display_name')
    .gte('games_played', 3)
    .order('total_points', { ascending: false });

  if (error || !allStats) {
    console.error('Error fetching leaderboard:', error);
    return { entries: [], userRank: 0, userEntry: null, totalPlayers: 0 };
  }

  // Calculate avg_points and sort
  const entries: LeaderboardEntry[] = allStats
    .map(s => ({
      user_id: s.user_id,
      display_name: s.display_name || `Player #${s.user_id.slice(-4)}`,
      games_played: s.games_played,
      total_points: s.total_points,
      current_streak: s.current_streak,
      max_streak: s.max_streak,
      avg_points: Math.round(s.total_points / s.games_played),
    }))
    .sort((a, b) => {
      // Primary: avg_points descending
      if (b.avg_points !== a.avg_points) return b.avg_points - a.avg_points;
      // Secondary: games_played descending (rewards consistency)
      return b.games_played - a.games_played;
    });

  const userRank = entries.findIndex(e => e.user_id === userId) + 1;
  const userEntry = entries.find(e => e.user_id === userId) || null;

  return {
    entries,
    userRank,
    userEntry,
    totalPlayers: entries.length,
  };
};

// Fetch top streaks for leaderboard
export const fetchTopStreaks = async (): Promise<LeaderboardEntry[]> => {
  const { data, error } = await supabase
    .from('user_stats')
    .select('user_id, games_played, total_points, current_streak, max_streak, display_name')
    .gte('games_played', 1)
    .order('max_streak', { ascending: false })
    .limit(10);

  if (error || !data) {
    console.error('Error fetching top streaks:', error);
    return [];
  }

  return data.map(s => ({
    user_id: s.user_id,
    display_name: s.display_name || `Player #${s.user_id.slice(-4)}`,
    games_played: s.games_played,
    total_points: s.total_points,
    current_streak: s.current_streak,
    max_streak: s.max_streak,
    avg_points: s.games_played >= 3 ? Math.round(s.total_points / s.games_played) : 0,
  }));
};

// Update display name
export const updateDisplayName = async (userId: string, displayName: string): Promise<boolean> => {
  const { error } = await supabase
    .from('user_stats')
    .update({ display_name: displayName.trim() || null })
    .eq('user_id', userId);

  if (error) {
    console.error('Error updating display name:', error);
    return false;
  }
  return true;
};

// Save game result to Supabase
export const saveGameResult = async (
  userId: string,
  dayNumber: number,
  answers: boolean[],
  hintUsed: boolean,
  hintUsedOnEvent: number | null
): Promise<boolean> => {
  const score = answers.filter(Boolean).length;
  const points = calculatePoints(answers, hintUsedOnEvent);
  
  const { error } = await supabase
    .from('game_results')
    .upsert({
      user_id: userId,
      day_number: dayNumber,
      answers,
      hint_used: hintUsed,
      hint_used_on_event: hintUsedOnEvent,
      score,
      points,
    }, {
      onConflict: 'user_id,day_number',
    });
  
  if (error) {
    console.error('Error saving game result:', error);
    return false;
  }
  
  // Update user stats
  await updateUserStats(userId, answers, points);
  
  return true;
};

// Update user stats after game
export const updateUserStats = async (userId: string, answers: boolean[], points: number): Promise<void> => {
  const today = new Date().toISOString().split('T')[0];
  const correctCount = answers.filter(Boolean).length;
  
  // Get existing stats
  const existingStats = await fetchUserStats(userId);
  
  if (existingStats) {
    // Check if already counted today
    if (existingStats.last_played_date === today) {
      return;
    }
    
    // Calculate streak
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];
    
    let newStreak = 1;
    if (existingStats.last_played_date === yesterdayStr) {
      newStreak = existingStats.current_streak + 1;
    }
    
    const { error } = await supabase
      .from('user_stats')
      .update({
        games_played: existingStats.games_played + 1,
        current_streak: newStreak,
        max_streak: Math.max(existingStats.max_streak, newStreak),
        total_correct: existingStats.total_correct + correctCount,
        total_events: existingStats.total_events + answers.length,
        total_points: existingStats.total_points + points,
        last_played_date: today,
      })
      .eq('user_id', userId);
    
    if (error) {
      console.error('Error updating user stats:', error);
    }
  } else {
    // Create new stats record
    const { error } = await supabase
      .from('user_stats')
      .insert({
        user_id: userId,
        games_played: 1,
        current_streak: 1,
        max_streak: 1,
        total_correct: correctCount,
        total_events: answers.length,
        total_points: points,
        last_played_date: today,
      });
    
    if (error) {
      console.error('Error creating user stats:', error);
    }
  }
};

// Migrate localStorage data to Supabase on first login
export const migrateLocalStorageToSupabase = async (userId: string): Promise<boolean> => {
  const localStats = getStats();
  const localGameState = getGameState();
  
  // Check if user already has stats in Supabase
  const existingStats = await fetchUserStats(userId);
  
  if (existingStats && existingStats.games_played > 0) {
    // User already has data in Supabase, don't overwrite
    return false;
  }
  
  // Only migrate if there's local data
  if (localStats.gamesPlayed === 0) {
    return false;
  }

  // Estimate total points from local data (approximate)
  const estimatedPoints = localStats.totalCorrect * 100;
  
  // Create user stats from local data
  const { error: statsError } = await supabase
    .from('user_stats')
    .upsert({
      user_id: userId,
      games_played: localStats.gamesPlayed,
      current_streak: localStats.currentStreak,
      max_streak: localStats.maxStreak,
      total_correct: localStats.totalCorrect,
      total_events: localStats.totalEvents,
      total_points: estimatedPoints,
      last_played_date: localStats.lastPlayedDate ? new Date(localStats.lastPlayedDate).toISOString().split('T')[0] : null,
    });
  
  if (statsError) {
    console.error('Error migrating stats:', statsError);
    return false;
  }
  
  // If current game is complete, save that result too
  if (localGameState.isComplete && localGameState.answers.length > 0) {
    const answers = localGameState.answers.filter((a): a is boolean => a !== null);
    await saveGameResult(
      userId,
      localGameState.dayNumber,
      answers,
      localGameState.hintUsed,
      localGameState.hintUsedOnEvent
    );
  }
  
  return true;
};

// Convert Supabase stats to local GameStats format for UI compatibility
export const convertToGameStats = (stats: SupabaseUserStats): GameStats => {
  const successRate = stats.total_events > 0 
    ? Math.round((stats.total_correct / stats.total_events) * 100) 
    : 0;
  
  return {
    gamesPlayed: stats.games_played,
    currentStreak: stats.current_streak,
    maxStreak: stats.max_streak,
    eventSuccessRate: [successRate, successRate, successRate, successRate],
    totalCorrect: stats.total_correct,
    totalEvents: stats.total_events,
    lastPlayedDate: stats.last_played_date,
  };
};
