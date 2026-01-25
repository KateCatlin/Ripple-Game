import { useEffect, useState, useRef } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { 
  fetchLeaderboard, 
  fetchTopStreaks, 
  fetchUserStats,
  updateDisplayName,
  LeaderboardEntry 
} from "@/lib/supabaseStats";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pencil, Check, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { LoginPromptCard } from "./LoginPromptCard";

export const LeaderboardTab = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [topStreaks, setTopStreaks] = useState<LeaderboardEntry[]>([]);
  const [userRank, setUserRank] = useState(0);
  const [userEntry, setUserEntry] = useState<LeaderboardEntry | null>(null);
  const [totalPlayers, setTotalPlayers] = useState(0);
  const [userCurrentStreak, setUserCurrentStreak] = useState(0);
  
  // Edit display name state
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState("");
  const [saving, setSaving] = useState(false);
  
  // Retry mechanism for race condition with database writes
  const retryCountRef = useRef(0);
  const maxRetries = 5;
  const retryDelayMs = 800;

  useEffect(() => {
    const loadData = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      setLoading(true);
      retryCountRef.current = 0;
      
      const attemptLoad = async (): Promise<void> => {
        const [leaderboardData, streaksData, userStats] = await Promise.all([
          fetchLeaderboard(user.id),
          fetchTopStreaks(),
          fetchUserStats(user.id),
        ]);

        // Check for race conditions where data hasn't synced yet
        const userHasPlayed = userStats && userStats.games_played > 0;
        const userInLeaderboard = leaderboardData.userRank > 0;
        const leaderboardIsEmpty = leaderboardData.entries.length === 0;
        const userStatsNotLoaded = !userStats;
        
        // Retry if:
        // 1. User stats haven't loaded yet (null), OR
        // 2. User has stats showing games played but isn't in leaderboard yet, OR
        // 3. User has stats showing games played but leaderboard is empty
        const shouldRetry = retryCountRef.current < maxRetries && 
          (userStatsNotLoaded || (userHasPlayed && (!userInLeaderboard || leaderboardIsEmpty)));
        
        if (shouldRetry) {
          console.log(`Leaderboard retry ${retryCountRef.current + 1}/${maxRetries}: userStats=${userStats ? 'loaded' : 'null'}, games=${userStats?.games_played ?? 0}, leaderboard entries=${leaderboardData.entries.length}`);
          retryCountRef.current++;
          await new Promise(resolve => setTimeout(resolve, retryDelayMs));
          return attemptLoad();
        }

        setEntries(leaderboardData.entries);
        setUserRank(leaderboardData.userRank);
        setUserEntry(leaderboardData.userEntry);
        setTotalPlayers(leaderboardData.totalPlayers);
        setTopStreaks(streaksData);
        
        if (userStats) {
          setUserCurrentStreak(userStats.current_streak);
          if (leaderboardData.userEntry) {
            setEditName(leaderboardData.userEntry.display_name);
          }
        }
        
        setLoading(false);
      };
      
      await attemptLoad();
    };

    loadData();
  }, [user]);

  // Check if content is scrollable and show indicator
  useEffect(() => {
    const checkScrollable = () => {
      const container = scrollContainerRef.current;
      if (container) {
        const isScrollable = container.scrollHeight > container.clientHeight;
        const isAtBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 10;
        setShowScrollIndicator(isScrollable && !isAtBottom);
      }
    };

    // Check after content loads
    if (!loading) {
      setTimeout(checkScrollable, 100);
    }

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollable);
      return () => container.removeEventListener('scroll', checkScrollable);
    }
  }, [loading]);

  const handleSaveName = async () => {
    if (!user || !editName.trim()) return;
    
    setSaving(true);
    const success = await updateDisplayName(user.id, editName);
    setSaving(false);
    
    if (success) {
      setIsEditing(false);
      // Update local state
      if (userEntry) {
        setUserEntry({ ...userEntry, display_name: editName.trim() });
      }
      toast({
        title: "Name updated!",
        description: "Your display name has been saved.",
      });
    } else {
      toast({
        title: "Error",
        description: "Failed to update display name. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (!user) {
    return (
      <div className="py-4">
        <LoginPromptCard 
          onDismiss={() => {}} 
          message="Sign in to see how you rank against other players"
          showDismiss={false}
        />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="py-8 text-center text-muted-foreground">
        Loading leaderboard...
      </div>
    );
  }

  // Calculate user's streak percentile
  const streakRank = topStreaks.findIndex(s => s.user_id === user.id) + 1;
  const streakPercentile = topStreaks.length > 0 && streakRank > 0
    ? Math.round(((topStreaks.length - streakRank + 1) / topStreaks.length) * 100)
    : 0;

  // Get display entries: top 5 + user if not in top 5
  const displayEntries = entries.slice(0, 5);
  const showUserSeparately = userRank > 5 && userEntry;

  // User is ranked if they appear in the leaderboard data
  const isRanked = userRank > 0 && userEntry !== null;
  
  const userPercentile = totalPlayers > 0 && userRank > 0 
    ? Math.round(((totalPlayers - userRank + 1) / totalPlayers) * 100)
    : 0;

  return (
    <div className="relative">
      <div ref={scrollContainerRef} className="space-y-6 py-4">
        {/* User's rank section */}
        <div className="text-center p-4 bg-primary/5 rounded-xl border border-primary/20">
          <p className="text-sm text-muted-foreground mb-1">Your All-Time Rank</p>
          {isRanked ? (
            <>
              <p className="text-3xl font-display font-bold text-primary">
                #{userRank} <span className="text-lg font-normal text-muted-foreground">of {totalPlayers} players</span>
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Top {100 - userPercentile}% overall
              </p>
              {userEntry && (
                <p className="text-lg font-medium mt-2">
                  Total: {userEntry.total_points.toLocaleString()} points
                </p>
              )}
            </>
          ) : (
            <>
              <p className="text-xl font-display font-bold text-muted-foreground">
                Not ranked yet
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Complete a game to appear on the leaderboard!
              </p>
            </>
          )}
        </div>

        {/* Top Streaks section - FIRST for emphasis on daily engagement */}
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
            🔥 Longest Streaks
          </h4>
          <div className="space-y-1">
            {topStreaks.slice(0, 5).map((entry, index) => {
              const rank = index + 1;
              const isCurrentUser = entry.user_id === user.id;
              
              return (
                <div
                  key={entry.user_id}
                  className={cn(
                    "flex items-center justify-between py-1.5 text-sm",
                    isCurrentUser && "font-medium text-secondary"
                  )}
                >
                  <span>{rank}. {entry.display_name}</span>
                  <span>{entry.max_streak} days</span>
                </div>
              );
            })}
          </div>
          
          {userCurrentStreak > 0 && (
            <p className="text-sm text-muted-foreground mt-3 text-center">
              Your streak: {userCurrentStreak} day{userCurrentStreak !== 1 ? 's' : ''}
              {streakPercentile > 0 && ` (top ${100 - streakPercentile}%)`}
            </p>
          )}
        </div>

        {/* Top Players section */}
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
            🏆 Top Players <span className="text-xs">(by average points)</span>
          </h4>
          <div className="space-y-2">
            {displayEntries.map((entry, index) => {
              const rank = index + 1;
              const medal = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : `${rank}.`;
              const isCurrentUser = entry.user_id === user.id;
              
              return (
                <div
                  key={entry.user_id}
                  className={cn(
                    "flex items-center justify-between p-2 rounded-lg text-sm",
                    isCurrentUser && "bg-secondary/10 border border-secondary/30"
                  )}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-6">{medal}</span>
                    <span className={cn("font-medium", isCurrentUser && "text-secondary")}>
                      {entry.display_name}
                      {isCurrentUser && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-5 w-5 p-0 ml-1"
                          onClick={() => {
                            setEditName(entry.display_name);
                            setIsEditing(true);
                          }}
                        >
                          <Pencil className="h-3 w-3" />
                        </Button>
                      )}
                    </span>
                  </div>
                  <span className="text-muted-foreground">
                    {entry.avg_points} avg · {entry.games_played} games
                  </span>
                </div>
              );
            })}
            
            {showUserSeparately && (
              <>
                <div className="text-center text-muted-foreground text-xs py-1">...</div>
                <div className="flex items-center justify-between p-2 rounded-lg text-sm bg-secondary/10 border border-secondary/30">
                  <div className="flex items-center gap-2">
                    <span className="w-6">{userRank}.</span>
                    <span className="font-medium text-secondary">
                      {userEntry.display_name}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-5 w-5 p-0 ml-1"
                        onClick={() => {
                          setEditName(userEntry.display_name);
                          setIsEditing(true);
                        }}
                      >
                        <Pencil className="h-3 w-3" />
                      </Button>
                      <span className="text-xs text-muted-foreground ml-1">← You</span>
                    </span>
                  </div>
                  <span className="text-muted-foreground">
                    {userEntry.avg_points} avg · {userEntry.games_played} games
                  </span>
                </div>
              </>
            )}
            
            {entries.length === 0 && (
              <p className="text-center text-muted-foreground text-sm py-4">
                No players on the leaderboard yet. Be the first!
              </p>
            )}
          </div>
        </div>

        {/* Edit name dialog */}
        {isEditing && (
          <div className="fixed inset-0 bg-background/80 flex items-center justify-center z-50 p-4">
            <div className="bg-card border rounded-lg p-4 w-full max-w-sm space-y-4">
              <h3 className="font-display text-lg font-medium">Edit Display Name</h3>
              <Input
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                placeholder="Enter your display name"
                maxLength={50}
                autoFocus
              />
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setIsEditing(false)}
                  disabled={saving}
                >
                  <X className="h-4 w-4 mr-1" />
                  Cancel
                </Button>
                <Button
                  className="flex-1"
                  onClick={handleSaveName}
                  disabled={saving || !editName.trim()}
                >
                  <Check className="h-4 w-4 mr-1" />
                  {saving ? 'Saving...' : 'Save'}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bouncing scroll indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-1 pointer-events-none">
          <div className="bg-gradient-to-t from-background via-background to-transparent pt-6 pb-2 px-4">
            <ChevronDown className="h-5 w-5 text-muted-foreground animate-bounce" />
          </div>
        </div>
      )}
    </div>
  );
};
