import { supabase } from '@/integrations/supabase/client';
import { getStats, getGameState, GameStats, GameState } from './storage';

export interface SupabaseUserStats {
  user_id: string;
  games_played: number;
  current_streak: number;
  max_streak: number;
  total_correct: number;
  total_events: number;
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
  completed_at: string;
}

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

// Save game result to Supabase
export const saveGameResult = async (
  userId: string,
  dayNumber: number,
  answers: boolean[],
  hintUsed: boolean,
  hintUsedOnEvent: number | null
): Promise<boolean> => {
  const score = answers.filter(Boolean).length;
  
  const { error } = await supabase
    .from('game_results')
    .upsert({
      user_id: userId,
      day_number: dayNumber,
      answers,
      hint_used: hintUsed,
      hint_used_on_event: hintUsedOnEvent,
      score,
    }, {
      onConflict: 'user_id,day_number',
    });
  
  if (error) {
    console.error('Error saving game result:', error);
    return false;
  }
  
  // Update user stats
  await updateUserStats(userId, answers);
  
  return true;
};

// Update user stats after game
export const updateUserStats = async (userId: string, answers: boolean[]): Promise<void> => {
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
    eventSuccessRate: [successRate, successRate, successRate, successRate], // Simplified - we don't track per-event in Supabase
    totalCorrect: stats.total_correct,
    totalEvents: stats.total_events,
    lastPlayedDate: stats.last_played_date,
  };
};
