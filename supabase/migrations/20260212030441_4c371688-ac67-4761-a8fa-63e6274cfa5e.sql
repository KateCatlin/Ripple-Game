
-- 1. Trigger on game_results: recalculate points/score from answers (prevents fake points)
CREATE OR REPLACE FUNCTION public.validate_game_result()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  calc_points integer := 0;
  calc_score integer := 0;
  i integer;
BEGIN
  IF NEW.answers IS NULL OR array_length(NEW.answers, 1) IS NULL THEN
    RAISE EXCEPTION 'answers array cannot be empty';
  END IF;

  FOR i IN 1..array_length(NEW.answers, 1) LOOP
    IF NEW.answers[i] = true THEN
      calc_score := calc_score + 1;
      IF NEW.hint_used_on_event IS NOT NULL AND NEW.hint_used_on_event = i - 1 THEN
        calc_points := calc_points + 50;
      ELSE
        calc_points := calc_points + 100;
      END IF;
    END IF;
  END LOOP;

  -- Force server-calculated values
  NEW.score := calc_score;
  NEW.points := calc_points;
  RETURN NEW;
END;
$$;

CREATE TRIGGER validate_game_result_trigger
BEFORE INSERT OR UPDATE ON public.game_results
FOR EACH ROW
EXECUTE FUNCTION public.validate_game_result();

-- 2. Validation trigger on user_stats: prevent obviously fake values
CREATE OR REPLACE FUNCTION public.validate_user_stats()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- All values must be non-negative
  IF NEW.games_played < 0 OR NEW.current_streak < 0 OR NEW.max_streak < 0
     OR NEW.total_correct < 0 OR NEW.total_events < 0 OR NEW.total_points < 0 THEN
    RAISE EXCEPTION 'Stats values cannot be negative';
  END IF;

  -- Points can't exceed max possible (300 per game)
  IF NEW.games_played > 0 AND NEW.total_points > NEW.games_played * 300 THEN
    RAISE EXCEPTION 'total_points exceeds maximum possible';
  END IF;

  -- Streaks can't exceed games played
  IF NEW.current_streak > NEW.games_played THEN
    RAISE EXCEPTION 'current_streak cannot exceed games_played';
  END IF;
  IF NEW.max_streak > NEW.games_played THEN
    RAISE EXCEPTION 'max_streak cannot exceed games_played';
  END IF;

  -- Correct answers can't exceed total events
  IF NEW.total_correct > NEW.total_events THEN
    RAISE EXCEPTION 'total_correct cannot exceed total_events';
  END IF;

  -- Total events can't wildly exceed games (4 per game max, legacy format)
  IF NEW.games_played > 0 AND NEW.total_events > NEW.games_played * 4 THEN
    RAISE EXCEPTION 'total_events exceeds maximum possible';
  END IF;

  RETURN NEW;
END;
$$;

CREATE TRIGGER validate_user_stats_trigger
BEFORE INSERT OR UPDATE ON public.user_stats
FOR EACH ROW
EXECUTE FUNCTION public.validate_user_stats();
