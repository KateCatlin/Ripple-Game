import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { fetchDailyComparison, getPercentileMessage, DailyComparison } from "@/lib/supabaseStats";
import { cn } from "@/lib/utils";

interface ComparisonCardProps {
  dayNumber: number;
  hintUsed: boolean;
}

export const ComparisonCard = ({ dayNumber, hintUsed }: ComparisonCardProps) => {
  const { user } = useAuth();
  const [comparison, setComparison] = useState<DailyComparison | null>(null);
  const [loading, setLoading] = useState(true);
  const [animateBar, setAnimateBar] = useState(false);

  useEffect(() => {
    const loadComparison = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      const data = await fetchDailyComparison(user.id, dayNumber);
      setComparison(data);
      setLoading(false);
      
      // Trigger bar animation after data loads
      setTimeout(() => setAnimateBar(true), 100);
    };

    loadComparison();
  }, [user, dayNumber]);

  if (!user || loading) return null;
  if (!comparison) return null;

  // First player of the day message
  if (comparison.isFirst) {
    return (
      <Card className="border border-border/50 bg-card/50">
        <CardContent className="py-6 text-center">
          <p className="text-lg">🎉 You're the first to complete today's puzzle!</p>
          <p className="text-sm text-muted-foreground mt-2">
            Check back later to see how you compare.
          </p>
        </CardContent>
      </Card>
    );
  }

  const message = getPercentileMessage(comparison.percentile, hintUsed, comparison.userPoints);

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
          <p className="text-center text-sm font-medium">
            {comparison.percentile === 0 ? (
              <span className="text-muted-foreground">Building your ranking...</span>
            ) : (
              <>
                <span className="text-secondary">{comparison.percentile}th percentile</span>
                <span className="text-muted-foreground"> — You beat {comparison.percentile}% of </span>
                <span className="text-foreground">{comparison.playerCount.toLocaleString()} players</span>
                <span className="text-muted-foreground"> today</span>
              </>
            )}
          </p>
        </div>

        {/* Message */}
        <p className="text-center text-sm font-medium text-primary">
          {message}
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-2 gap-4 pt-2 border-t border-border/50">
          <div className="text-center">
            <p className="text-xs text-muted-foreground">🏆 Perfect scores</p>
            <p className="text-sm font-medium">
              {comparison.perfectCount} players ({comparison.perfectPercentage}%)
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
