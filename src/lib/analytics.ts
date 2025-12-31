import { supabase } from "@/integrations/supabase/client";

// Generate or retrieve a session ID for anonymous tracking
const getSessionId = (): string => {
  let sessionId = sessionStorage.getItem('analytics_session_id');
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    sessionStorage.setItem('analytics_session_id', sessionId);
  }
  return sessionId;
};

export type AnalyticsEvent = 
  | 'game_completed'
  | 'question_answered'
  | 'leaderboard_viewed'
  | 'signup_completed'
  | 'login_completed';

interface TrackEventOptions {
  userId?: string;
  metadata?: Record<string, unknown>;
}

export const trackEvent = async (
  eventName: AnalyticsEvent,
  options: TrackEventOptions = {}
): Promise<void> => {
  try {
    // Use type assertion since analytics_events table was just created
    const { error } = await supabase
      .from('analytics_events' as 'game_results')
      .insert({
        event_name: eventName,
        user_id: options.userId || null,
        session_id: getSessionId(),
        metadata: options.metadata || {},
      } as never);

    if (error) {
      console.error('Failed to track event:', error);
    }
  } catch (err) {
    // Silently fail - analytics should never break the app
    console.error('Analytics error:', err);
  }
};

// Fetch analytics summary for admin viewing
export const fetchAnalyticsSummary = async () => {
  // Use type assertion since analytics_events table was just created
  const { data, error } = await supabase
    .from('analytics_events' as 'game_results')
    .select('*');

  if (error) {
    console.error('Failed to fetch analytics:', error);
    return null;
  }

  // Calculate stats
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
  const stats = {
    game_completed: { total: 0, today: 0 },
    leaderboard_viewed: { total: 0, today: 0 },
    signup_completed: { total: 0, today: 0 },
    login_completed: { total: 0, today: 0 },
  };

  // Cast data to unknown first then to our expected type
  const events = data as unknown as Array<{ event_name: string; created_at: string }> | null;
  events?.forEach((event) => {
    const eventDate = new Date(event.created_at);
    const eventName = event.event_name as AnalyticsEvent;
    
    if (stats[eventName]) {
      stats[eventName].total++;
      if (eventDate >= today) {
        stats[eventName].today++;
      }
    }
  });

  return stats;
};
