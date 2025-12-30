-- Drop and recreate views with SECURITY INVOKER to fix security linter warnings
DROP VIEW IF EXISTS public.leaderboard_view;
DROP VIEW IF EXISTS public.daily_stats_view;

-- Recreate leaderboard_view with SECURITY INVOKER
CREATE VIEW public.leaderboard_view 
WITH (security_invoker = true) AS
SELECT 
  user_id,
  COALESCE(display_name, 'Player #' || RIGHT(user_id::text, 4)) as display_name,
  games_played,
  total_points,
  current_streak,
  max_streak,
  CASE WHEN games_played >= 3 THEN ROUND((total_points::numeric / games_played), 0) ELSE 0 END as avg_points
FROM user_stats
WHERE games_played >= 3
ORDER BY avg_points DESC;

-- Recreate daily_stats_view with SECURITY INVOKER
CREATE VIEW public.daily_stats_view 
WITH (security_invoker = true) AS
SELECT 
  day_number,
  COUNT(*) as player_count,
  AVG(points) as avg_points,
  COUNT(*) FILTER (WHERE points = 300) as perfect_count
FROM game_results
GROUP BY day_number;

-- Grant access to authenticated users
GRANT SELECT ON public.leaderboard_view TO authenticated;
GRANT SELECT ON public.daily_stats_view TO authenticated;