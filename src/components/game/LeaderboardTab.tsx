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
import { Pencil, Check, X, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { LoginPromptCard } from "./LoginPromptCard";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const LeaderboardTab = () => {
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

  const formatSqrtGames = (gamesPlayed: number) => Math.sqrt(gamesPlayed).toFixed(1);
  const formatStreakBonus = (currentStreak: number) => (1 + (Math.min(currentStreak, 30) * 0.02)).toFixed(2);

  const InfoPopover = ({ label, className }: { label: string; className?: string }) => {
    const [open, setOpen] = useState(false);

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            type="button"
            aria-label={label}
            className={cn(
              "inline-flex h-5 w-5 items-center justify-center rounded-full text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
              className
            )}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            onBlur={() => setOpen(false)}
            onClick={() => setOpen((prev) => !prev)}
          >
            <Info className="h-4 w-4" />
          </button>
        </PopoverTrigger>
        <PopoverContent
          className="max-w-xs text-xs leading-relaxed"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <div className="space-y-2">
            <div className="font-semibold text-sm">How Leaderboard Scoring Works</div>
            <div className="border-t border-muted-foreground/20" />
            <div className="text-[12px] text-muted-foreground">Formula: Avg Points × √Games × Streak Bonus</div>
            <div className="text-[12px] text-muted-foreground">
              Example:
            </div>
            <ul className="space-y-1 text-[12px] text-muted-foreground">
              <li>• Average: 242 points per game</li>
              <li>• Games: √16 = 4.00 multiplier</li>
              <li>• Streak: 12 days = 1.24× bonus</li>
              <li>• Final Score: 242 × 4.00 × 1.24 = 1,199</li>
            </ul>
            <div className="text-[12px] text-muted-foreground">
              💡 Strategy Tips:
            </div>
            <ul className="space-y-1 text-[12px] text-muted-foreground">
              <li>✓ Archive games count toward games played, but not your streak</li>
              <li>✓ Maintain daily streaks for big bonuses</li>
              <li>✓ Quality matters more than quantity</li>
              <li className="pl-4">(√100 = 10×, but √400 = only 20×)</li>
            </ul>
          </div>
        </PopoverContent>
      </Popover>
    );
  };

  return (
    <div className="space-y-6 py-4">
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
                Score: {userEntry.leaderboard_score.toLocaleString()} pts
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

      {/* Top Players section */}
      <div>
        <h4 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
          🏆 Top Players <span className="text-xs">(by combined score)</span>
        </h4>
        <div className="mx-auto w-full max-w-[calc(100vw-32px)] md:max-w-[620px] lg:max-w-[680px]">
          <div className="md:hidden space-y-2">
          {displayEntries.map((entry, index) => {
            const rank = index + 1;
            const medal = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : `${rank}.`;
            const isCurrentUser = entry.user_id === user.id;
            const sqrtGames = formatSqrtGames(entry.games_played);
            const streakBonus = formatStreakBonus(entry.current_streak);
            const cardBg = isCurrentUser
              ? "bg-[#e6f4f9] border border-[#b8dce8]"
              : rank === 1
                ? "bg-[#f7f1d1] shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
                : rank === 2
                  ? "bg-[#f1f1f3] shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
                  : rank === 3
                    ? "bg-[#f4e7df] shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
                    : index % 2 === 0 ? "bg-white" : "bg-[#fafaf8]";

            return (
              <div
                key={entry.user_id}
                className={cn("rounded-lg px-4 py-3.5", cardBg)}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-2">
                    <span className="text-base">{medal}</span>
                    <span className="text-sm font-medium truncate" title={entry.display_name}>
                      {entry.display_name}
                      {isCurrentUser && <span className="text-xs text-muted-foreground ml-1">← You</span>}
                    </span>
                  </div>
                  <span className="text-base font-semibold tabular-nums">
                    Score: {entry.leaderboard_score.toLocaleString()}
                  </span>
                </div>
                <div className="mt-1 text-[12px] text-[#666]">
                  {entry.avg_points} avg × {sqrtGames} √games × {streakBonus} streak
                </div>
              </div>
            );
          })}

          {showUserSeparately && userEntry && (
            <div className="rounded-lg px-4 py-3.5 bg-[#e6f4f9] border border-[#b8dce8]">
              <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-2">
                  <span className="text-base">{userRank}.</span>
                  <span className="text-sm font-medium truncate" title={userEntry.display_name}>
                    {userEntry.display_name}
                    <span className="text-xs text-muted-foreground ml-1">← You</span>
                  </span>
                </div>
                <span className="text-base font-semibold tabular-nums">
                  Score: {userEntry.leaderboard_score.toLocaleString()}
                </span>
              </div>
              <div className="mt-1 text-[12px] text-[#666]">
                {userEntry.avg_points} avg × {formatSqrtGames(userEntry.games_played)} √games × {formatStreakBonus(userEntry.current_streak)} streak
              </div>
            </div>
          )}

          {entries.length === 0 && (
            <div className="rounded-lg px-4 py-6 text-center text-muted-foreground text-sm bg-white">
              No players on the leaderboard yet. Be the first!
            </div>
          )}
          </div>

          <div className="hidden md:block mt-4">
            <TooltipProvider delayDuration={100}>
              <table className="w-full table-fixed text-sm">
              <colgroup>
                <col className="w-[50px]" />
                <col className="w-auto" />
                <col className="w-[110px]" />
                <col className="w-[70px]" />
                <col className="w-[80px]" />
                <col className="w-[80px]" />
              </colgroup>
              <thead>
                <tr className="text-[11px] uppercase tracking-wide text-[#666] font-semibold">
                  <th className="px-4 py-3 text-left">Rank</th>
                  <th className="px-4 py-3 text-left min-w-[220px] max-w-[320px]">Player</th>
                  <th className="px-4 py-3 text-right">
                    <span className="inline-flex items-center gap-1">
                      Score
                      <InfoPopover label="Score formula details" className="h-4 w-4" />
                    </span>
                  </th>
                  <th className="px-4 py-3 text-right">Avg</th>
                  <th className="px-4 py-3 text-right">Games</th>
                  <th className="px-4 py-3 text-right">Streak</th>
                </tr>
              </thead>
              <tbody>
                {displayEntries.map((entry, index) => {
                  const rank = index + 1;
                  const medal = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : `${rank}.`;
                  const isCurrentUser = entry.user_id === user.id;

                  return (
                    <tr
                      key={entry.user_id}
                      className={cn(
                        "border-b border-[#e8e8e6]",
                        isCurrentUser && "bg-[#e6f4f9] border border-[#b8dce8]"
                      )}
                    >
                      <td className="px-4 py-3.5 text-left">{medal}</td>
                      <td className="px-4 py-3.5 text-left min-w-[220px] max-w-[320px]">
                        <div className="flex items-center gap-1 min-w-0">
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span
                                className={cn("font-medium truncate", isCurrentUser && "text-secondary")}
                              >
                                {entry.display_name}
                              </span>
                            </TooltipTrigger>
                            <TooltipContent side="top">
                              {entry.display_name}
                            </TooltipContent>
                          </Tooltip>
                          {isCurrentUser && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-5 w-5 p-0"
                              onClick={() => {
                                setEditName(entry.display_name);
                                setIsEditing(true);
                              }}
                            >
                              <Pencil className="h-3 w-3" />
                            </Button>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3.5 text-right text-base font-semibold tabular-nums">
                        {entry.leaderboard_score.toLocaleString()}
                      </td>
                      <td className="px-4 py-3.5 text-right text-[14px] font-normal text-[#666] tabular-nums">
                        {entry.avg_points}
                      </td>
                      <td className="px-4 py-3.5 text-right text-[14px] font-normal text-[#666] tabular-nums">
                        {entry.games_played}
                      </td>
                      <td className="px-4 py-3.5 text-right text-[14px] font-normal text-[#666] tabular-nums">
                        🔥{entry.current_streak}
                      </td>
                    </tr>
                  );
                })}

                {showUserSeparately && userEntry && (
                  <>
                    <tr className="border-b border-[#e8e8e6]">
                      <td className="px-4 py-2 text-center text-xs text-muted-foreground" colSpan={6}>...</td>
                    </tr>
                    <tr className="border-b border-[#e8e8e6] bg-[#e6f4f9] border border-[#b8dce8]">
                      <td className="px-4 py-3.5 text-left">{userRank}.</td>
                      <td className="px-4 py-3.5 text-left min-w-[220px] max-w-[320px]">
                        <div className="flex items-center gap-1 min-w-0">
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span className="font-medium text-secondary truncate">
                                {userEntry.display_name}
                              </span>
                            </TooltipTrigger>
                            <TooltipContent side="top">
                              {userEntry.display_name}
                            </TooltipContent>
                          </Tooltip>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-5 w-5 p-0"
                            onClick={() => {
                              setEditName(userEntry.display_name);
                              setIsEditing(true);
                            }}
                          >
                            <Pencil className="h-3 w-3" />
                          </Button>
                          <span className="text-xs text-muted-foreground ml-1">← You</span>
                        </div>
                      </td>
                      <td className="px-4 py-3.5 text-right text-base font-semibold tabular-nums">
                        {userEntry.leaderboard_score.toLocaleString()}
                      </td>
                      <td className="px-4 py-3.5 text-right text-[14px] font-normal text-[#666] tabular-nums">
                        {userEntry.avg_points}
                      </td>
                      <td className="px-4 py-3.5 text-right text-[14px] font-normal text-[#666] tabular-nums">
                        {userEntry.games_played}
                      </td>
                      <td className="px-4 py-3.5 text-right text-[14px] font-normal text-[#666] tabular-nums">
                        🔥{userEntry.current_streak}
                      </td>
                    </tr>
                  </>
                )}

                {entries.length === 0 && (
                  <tr>
                    <td className="px-4 py-6 text-center text-muted-foreground text-sm" colSpan={6}>
                      No players on the leaderboard yet. Be the first!
                    </td>
                  </tr>
                )}
              </tbody>
              </table>
            </TooltipProvider>
          </div>
        </div>
      </div>

      {/* Top Streaks section */}
      <div>
        <h4 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
          🔥 Longest Streaks
        </h4>
        <div className="mx-auto w-full max-w-[calc(100vw-32px)] md:max-w-[620px] lg:max-w-[680px]">
          <div className="md:hidden space-y-2">
            {topStreaks.slice(0, 5).map((entry, index) => {
              const rank = index + 1;
              const medal = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : `${rank}.`;
              const isCurrentUser = entry.user_id === user.id;

              return (
                <div
                  key={entry.user_id}
                  className={cn(
                    "rounded-lg px-4 py-3.5",
                    isCurrentUser ? "bg-[#e6f4f9] border border-[#b8dce8]" : "bg-white"
                  )}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-2">
                      <span className="text-base">{medal}</span>
                      <span className="text-sm font-medium truncate" title={entry.display_name}>
                        {entry.display_name}
                        {isCurrentUser && <span className="text-xs text-muted-foreground ml-1">← You</span>}
                      </span>
                    </div>
                    <span className="text-base font-semibold tabular-nums">
                      {entry.max_streak} days
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="hidden md:block">
            <TooltipProvider delayDuration={100}>
              <table className="w-full table-fixed text-sm">
                <colgroup>
                  <col className="w-[50px]" />
                  <col className="w-auto" />
                  <col className="w-[100px]" />
                </colgroup>
                <thead>
                  <tr className="text-[11px] uppercase tracking-wide text-[#666] font-semibold">
                    <th className="px-4 py-3 text-left">Rank</th>
                    <th className="px-4 py-3 text-left min-w-[220px] max-w-[320px]">Player</th>
                    <th className="px-4 py-3 text-right">Streak</th>
                  </tr>
                </thead>
                <tbody>
                  {topStreaks.slice(0, 5).map((entry, index) => {
                    const rank = index + 1;
                    const medal = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : `${rank}.`;
                    const isCurrentUser = entry.user_id === user.id;

                    return (
                      <tr
                        key={entry.user_id}
                        className={cn(
                          "border-b border-[#e8e8e6]",
                          isCurrentUser && "bg-[#e6f4f9] border border-[#b8dce8]"
                        )}
                      >
                        <td className="px-4 py-3.5 text-left">{medal}</td>
                        <td className="px-4 py-3.5 text-left min-w-[220px] max-w-[320px]">
                          <div className="flex items-center gap-1 min-w-0">
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <span className={cn("font-medium truncate", isCurrentUser && "text-secondary")}>
                                  {entry.display_name}
                                </span>
                              </TooltipTrigger>
                              <TooltipContent side="top">
                                {entry.display_name}
                              </TooltipContent>
                            </Tooltip>
                            {isCurrentUser && <span className="text-xs text-muted-foreground ml-1">← You</span>}
                          </div>
                        </td>
                        <td className="px-4 py-3.5 text-right text-[14px] font-normal text-[#666] tabular-nums">
                          {entry.max_streak}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </TooltipProvider>
          </div>
        </div>
        
        {userCurrentStreak > 0 && (
          <p className="text-sm text-muted-foreground mt-3 text-center">
            Your streak: {userCurrentStreak} day{userCurrentStreak !== 1 ? 's' : ''}
            {streakPercentile > 0 && ` (top ${100 - streakPercentile}%)`}
          </p>
        )}
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
  );
};
