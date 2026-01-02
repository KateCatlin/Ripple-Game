import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { fetchDailyComparison, DailyComparison } from "@/lib/supabaseStats";
import { cn } from "@/lib/utils";

interface ComparisonCardProps {
  dayNumber: number;
  hintUsed: boolean;
}

export const ComparisonCard = (props: ComparisonCardProps) => {
  const { user } = useAuth();
  const { dayNumber } = props;
  const [comparison, setComparison] = useState<DailyComparison | null>(null);
  const [loading, setLoading] = useState(true);
  const [animateBar, setAnimateBar] = useState(false);

  // Retry mechanism for race condition with database writes
  const retryCountRef = useRef(0);
  const maxRetries = 5;
  const retryDelayMs = 800;

  useEffect(() => {
    let cancelled = false;

    const loadComparison = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      setLoading(true);
      setAnimateBar(false);
      retryCountRef.current = 0;

      const attemptLoad = async (): Promise<void> => {
        const data = await fetchDailyComparison(user.id, dayNumber);
        
        console.log(`[ComparisonCard] Attempt ${retryCountRef.current + 1}/${maxRetries + 1}:`, {
          dayNumber,
          data,
          playerCount: data?.playerCount,
          percentile: data?.percentile,
          isFirst: data?.isFirst,
        });

        if (cancelled) return;

        if (!data) {
          setComparison(null);
          setLoading(false);
          return;
        }

        // Retry when we only see the current user's result (race condition)
        const shouldRetry =
          retryCountRef.current < maxRetries &&
          (data.isFirst === true || data.playerCount === 1);

        if (shouldRetry) {
          retryCountRef.current++;
          await new Promise(resolve => setTimeout(resolve, retryDelayMs));
          if (cancelled) return;
          return attemptLoad();
        }

        setComparison(data);
        setLoading(false);

        // Trigger bar animation after data loads
        setTimeout(() => {
          if (!cancelled) setAnimateBar(true);
        }, 100);
      };

      await attemptLoad();
    };

    loadComparison();

    return () => {
      cancelled = true;
    };
  }, [user, dayNumber]);

  if (!user || loading) return null;
  if (!comparison) return null;

  // Hide the card when we don't have meaningful comparison data
  if (comparison.playerCount <= 1 || comparison.percentile === 0) return null;

  return (
    <Card className="border border-border/50 bg-card/50 animate-float-up">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-display text-center">
          How You Compared Today
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Score display */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">Your Score</p>
          <p className="text-2xl font-display font-bold text-foreground">
            {comparison.userPoints} points
          </p>
        </div>

        {/* Percentile bar */}
        <div className="space-y-2">
          <div className="h-4 bg-muted rounded-full overflow-hidden">
            <div
              className={cn(
                "h-full bg-secondary transition-all duration-1000 ease-out rounded-full",
              )}
              style={{ width: animateBar ? `${comparison.percentile}%` : '0%' }}
            />
          </div>
          <p className="text-center text-sm font-medium text-primary">
            Your score was higher than {comparison.percentile}% of players!
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 gap-4 pt-2 border-t border-border/50">
          <div className="text-center">
            <p className="text-xs text-muted-foreground">🏆 Perfect scores</p>
            <p className="text-sm font-medium">
              {comparison.perfectPercentage}% of players
            </p>
          </div>
          <div className="text-center">
            <p className="text-xs text-muted-foreground">📊 Average score</p>
            <p className="text-sm font-medium">{comparison.avgPoints} points</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
