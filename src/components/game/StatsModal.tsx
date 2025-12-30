import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getStats, GameStats } from "@/lib/storage";
import { useAuth } from "@/contexts/AuthContext";
import { fetchUserStats, convertToGameStats } from "@/lib/supabaseStats";
import { useEffect, useState } from "react";
import { LeaderboardTab } from "./LeaderboardTab";

interface StatsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const StatsModal = ({ open, onOpenChange }: StatsModalProps) => {
  const { user } = useAuth();
  const [stats, setStats] = useState<GameStats | null>(null);
  const [totalPoints, setTotalPoints] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open) {
      const loadStats = async () => {
        if (user) {
          setLoading(true);
          const supabaseStats = await fetchUserStats(user.id);
          if (supabaseStats) {
            setStats(convertToGameStats(supabaseStats));
            setTotalPoints(supabaseStats.total_points);
          } else {
            // Fallback to localStorage for new users
            setStats(getStats());
            setTotalPoints(0);
          }
          setLoading(false);
        } else {
          setStats(getStats());
          setTotalPoints(0);
        }
      };
      loadStats();
    }
  }, [open, user]);

  if (!stats) return null;

  const successRate = stats.totalEvents > 0 
    ? Math.round((stats.totalCorrect / stats.totalEvents) * 100) 
    : 0;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-center">
            Statistics
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="stats" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="stats">Your Stats</TabsTrigger>
            <TabsTrigger value="leaderboard">🌊 Leaderboard</TabsTrigger>
          </TabsList>
          
          <TabsContent value="stats">
            {loading ? (
              <div className="py-8 text-center text-muted-foreground">
                Loading stats...
              </div>
            ) : (
              <div className="space-y-6 py-4">
                {/* Main stats grid */}
                <div className="grid grid-cols-4 gap-4 text-center">
                  <StatItem value={stats.gamesPlayed} label="Played" />
                  <StatItem value={`${successRate}%`} label="Success" />
                  <StatItem value={stats.currentStreak} label="Streak" />
                  <StatItem value={stats.maxStreak} label="Max" />
                </div>

                {/* Total points for logged-in users */}
                {user && totalPoints > 0 && (
                  <div className="text-center p-3 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-sm text-muted-foreground">Total Points</p>
                    <p className="text-2xl font-display font-bold text-primary">
                      {totalPoints.toLocaleString()}
                    </p>
                  </div>
                )}

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

                {/* Cloud sync indicator for logged-in users */}
                {user && (
                  <div className="text-center text-xs text-muted-foreground">
                    ☁️ Stats synced to your account
                  </div>
                )}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="leaderboard">
            <LeaderboardTab />
          </TabsContent>
        </Tabs>
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
