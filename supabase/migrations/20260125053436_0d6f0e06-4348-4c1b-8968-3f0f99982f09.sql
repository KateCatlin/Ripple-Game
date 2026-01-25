-- Normalize old 4-round game scores (day 745) to 3-round format
-- Scale points by 0.75 (300/400) to make them comparable

-- Step 1: Update game_results for the old 4-round format day (day 745)
UPDATE game_results 
SET points = ROUND(points * 0.75)::integer 
WHERE day_number = 745 AND points > 300;

-- Step 2: Recalculate total_points in user_stats from normalized game_results
UPDATE user_stats us
SET total_points = (
  SELECT COALESCE(SUM(gr.points), 0)
  FROM game_results gr
  WHERE gr.user_id = us.user_id
);