import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getStats, GameStats } from "@/lib/storage";
import { useEffect, useState } from "react";

interface StatsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const StatsModal = ({ open, onOpenChange }: StatsModalProps) => {
  const [stats, setStats] = useState<GameStats | null>(null);

  useEffect(() => {
    if (open) {
      setStats(getStats());
    }
  }, [open]);

  if (!stats) return null;

  const successRate = stats.totalEvents > 0 
    ? Math.round((stats.totalCorrect / stats.totalEvents) * 100) 
    : 0;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-center">
            Your Statistics
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Main stats grid */}
          <div className="grid grid-cols-4 gap-4 text-center">
            <StatItem value={stats.gamesPlayed} label="Played" />
            <StatItem value={`${successRate}%`} label="Success" />
            <StatItem value={stats.currentStreak} label="Streak" />
            <StatItem value={stats.maxStreak} label="Max" />
          </div>

          {/* Event success breakdown */}
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-3 text-center">
              Success by Event Position
            </h4>
            <div className="space-y-2">
              {stats.eventSuccessRate.slice(0, 3).map((rate, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground w-16">
                    Event {index + 1}
                  </span>
                  <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-correct transition-all duration-500"
                      style={{ width: `${rate}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium w-12 text-right">
                    {rate}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Streak info */}
          {stats.currentStreak > 0 && (
            <div className="text-center p-4 bg-correct/10 rounded-xl">
              <p className="text-sm text-muted-foreground mb-1">
                Current Streak
              </p>
              <p className="text-3xl font-display font-bold text-correct">
                {stats.currentStreak} {stats.currentStreak === 1 ? 'day' : 'days'} 🔥
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

const StatItem = ({ value, label }: { value: string | number; label: string }) => (
  <div>
    <div className="text-2xl font-display font-bold text-foreground">
      {value}
    </div>
    <div className="text-xs text-muted-foreground">{label}</div>
  </div>
);
