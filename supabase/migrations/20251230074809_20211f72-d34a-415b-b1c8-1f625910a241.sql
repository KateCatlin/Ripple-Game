-- Add points column to game_results
ALTER TABLE game_results ADD COLUMN points INTEGER NOT NULL DEFAULT 0;

-- Add total_points and display_name to user_stats
ALTER TABLE user_stats ADD COLUMN total_points INTEGER NOT NULL DEFAULT 0;
ALTER TABLE user_stats ADD COLUMN display_name VARCHAR(50);

-- Create indexes for leaderboard performance
CREATE INDEX idx_game_results_day_points ON game_results(day_number, points DESC);
CREATE INDEX idx_user_stats_total_points ON user_stats(total_points DESC);
CREATE INDEX idx_user_stats_avg_points ON user_stats((CASE WHEN games_played >= 3 THEN total_points::float / games_played ELSE 0 END) DESC);

-- Backfill points for existing game_results
-- points = (correct_answers × 100) - (50 if hint was used on a correct answer)
UPDATE game_results 
SET points = (
  SELECT COALESCE(SUM(
    CASE 
      WHEN val = true THEN 
        CASE WHEN hint_used AND hint_used_on_event = idx THEN 50 ELSE 100 END
      ELSE 0 
    END
  ), 0)
  FROM unnest(answers) WITH ORDINALITY AS a(val, idx)
  WHERE idx = idx -- Just to use the unnest properly
);

-- Actually, let me fix the backfill query
UPDATE game_results gr
SET points = (
  SELECT COALESCE(SUM(
    CASE 
      WHEN elem::boolean = true THEN 
        CASE WHEN gr.hint_used AND gr.hint_used_on_event = (idx - 1) THEN 50 ELSE 100 END
      ELSE 0 
    END
  ), 0)
  FROM unnest(gr.answers) WITH ORDINALITY AS arr(elem, idx)
);

-- Backfill total_points in user_stats from game_results
UPDATE user_stats us
SET total_points = COALESCE((
  SELECT SUM(gr.points)
  FROM game_results gr
  WHERE gr.user_id = us.user_id
), 0);

-- Create RLS policy for public read access to leaderboard data (only display_name, games_played, total_points, current_streak, max_streak)
-- We need a view for the leaderboard that only exposes safe data
CREATE OR REPLACE VIEW public.leaderboard_view AS
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

-- Allow authenticated users to view the leaderboard
GRANT SELECT ON public.leaderboard_view TO authenticated;

-- Create a view for daily stats that aggregates today's results
CREATE OR REPLACE VIEW public.daily_stats_view AS
SELECT 
  day_number,
  COUNT(*) as player_count,
  AVG(points) as avg_points,
  COUNT(*) FILTER (WHERE points = 300) as perfect_count
FROM game_results
GROUP BY day_number;

-- Allow authenticated users to view daily stats
GRANT SELECT ON public.daily_stats_view TO authenticated;