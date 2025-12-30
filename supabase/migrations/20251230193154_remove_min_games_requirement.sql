-- Remove minimum 3 games requirement from leaderboard view
-- Players now appear on leaderboard after completing just 1 game

DROP VIEW IF EXISTS public.leaderboard_view;

-- Recreate leaderboard_view with games_played >= 1 instead of >= 3
CREATE VIEW public.leaderboard_view 
WITH (security_invoker = true) AS
SELECT 
  user_id,
  COALESCE(display_name, 'Player #' || RIGHT(user_id::text, 4)) as display_name,
  games_played,
  total_points,
  current_streak,
  max_streak,
  CASE WHEN games_played >= 1 THEN ROUND((total_points::numeric / games_played), 0) ELSE 0 END as avg_points
FROM user_stats
WHERE games_played >= 1
ORDER BY avg_points DESC;

-- Grant access to authenticated users
GRANT SELECT ON public.leaderboard_view TO authenticated;
