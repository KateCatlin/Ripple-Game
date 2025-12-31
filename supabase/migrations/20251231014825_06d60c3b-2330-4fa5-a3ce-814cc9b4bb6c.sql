-- Fix security definer view by dropping and recreating with SECURITY INVOKER
DROP VIEW IF EXISTS public.analytics_summary;

CREATE OR REPLACE VIEW public.analytics_summary 
WITH (security_invoker = true) AS
SELECT 
  event_name,
  COUNT(*) as total_count,
  COUNT(DISTINCT session_id) as unique_sessions,
  COUNT(DISTINCT user_id) as unique_users,
  DATE(created_at) as event_date
FROM public.analytics_events
GROUP BY event_name, DATE(created_at)
ORDER BY event_date DESC, event_name;