-- Drop the existing restrictive SELECT policy
DROP POLICY IF EXISTS "Users can view their own stats" ON public.user_stats;

-- Create a new policy that allows all authenticated users to view all stats (for leaderboard)
CREATE POLICY "Users can view all stats for leaderboard"
ON public.user_stats
FOR SELECT
TO authenticated
USING (true);