-- Allow authenticated users to read points for daily comparison stats
CREATE POLICY "Users can view points for daily stats"
ON public.game_results
FOR SELECT
TO authenticated
USING (true);

-- Create percentile calculation function with SECURITY DEFINER
CREATE OR REPLACE FUNCTION public.get_daily_percentile(p_user_id UUID, p_day_number INTEGER)
RETURNS TABLE(
  player_count BIGINT,
  percentile INTEGER,
  avg_points INTEGER,
  perfect_count BIGINT,
  user_points INTEGER
) 
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN QUERY
  WITH user_result AS (
    SELECT points FROM game_results WHERE user_id = p_user_id AND day_number = p_day_number
  ),
  day_results AS (
    SELECT points FROM game_results WHERE day_number = p_day_number
  )
  SELECT
    (SELECT COUNT(*) FROM day_results)::BIGINT as player_count,
    CASE 
      WHEN (SELECT COUNT(*) FROM day_results) <= 1 THEN 100
      ELSE ROUND(
        (SELECT COUNT(*) FROM day_results WHERE points < (SELECT points FROM user_result))::NUMERIC 
        / (SELECT COUNT(*) FROM day_results)::NUMERIC * 100
      )::INTEGER
    END as percentile,
    (SELECT ROUND(AVG(points)) FROM day_results)::INTEGER as avg_points,
    (SELECT COUNT(*) FROM day_results WHERE points = 300)::BIGINT as perfect_count,
    (SELECT points FROM user_result)::INTEGER as user_points;
END;
$$ LANGUAGE plpgsql;

-- Grant execute to authenticated users
GRANT EXECUTE ON FUNCTION public.get_daily_percentile TO authenticated;