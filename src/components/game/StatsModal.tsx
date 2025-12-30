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
import { Target, TrendingUp, Flame, Trophy, LucideIcon } from "lucide-react";

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
              <div className="space-y-4 py-4">
                {/* 2x2 Stats grid */}
                <div className="grid grid-cols-2 gap-3">
                  <StatCard 
                    icon={Target} 
                    value={stats.gamesPlayed} 
                    label="Games Played" 
                  />
                  <StatCard 
                    icon={TrendingUp} 
                    value={`${successRate}%`} 
                    label="Success Rate" 
                  />
                  <StatCard 
                    icon={Flame} 
                    value={stats.currentStreak} 
                    label="Current Streak" 
                  />
                  <StatCard 
                    icon={Trophy} 
                    value={stats.maxStreak} 
                    label="Max Streak" 
                  />
                </div>

                {/* Average Score card (full-width) */}
                <div className="bg-sand-dark/30 rounded-xl p-4 text-center border border-border/50">
                  <p className="text-sm text-muted-foreground mb-1">
                    Average Score
                  </p>
                  <p className="text-4xl font-display font-bold text-primary">
                    {stats.gamesPlayed > 0 
                      ? Math.round(totalPoints / stats.gamesPlayed) 
                      : 0}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    out of 300 points
                  </p>
                </div>

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

interface StatCardProps {
  icon: LucideIcon;
  value: string | number;
  label: string;
}

const StatCard = ({ icon: Icon, value, label }: StatCardProps) => (
  <div className="bg-sand-dark/40 rounded-xl p-4 text-center">
    <Icon className="w-6 h-6 mx-auto mb-2 text-secondary" strokeWidth={2} />
    <div className="text-3xl font-display font-bold text-foreground">
      {value}
    </div>
    <div className="text-sm text-muted-foreground mt-1">{label}</div>
  </div>
);
