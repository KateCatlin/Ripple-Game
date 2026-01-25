import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArchivedPuzzles, getDayNumberForDate } from "@/data/puzzles";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, ChevronRight, Archive as ArchiveIcon, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { calculatePoints } from "@/lib/supabaseStats";
import { trackEvent } from "@/lib/analytics";

interface CompletedPuzzle {
  dayNumber: number;
  points: number;
}

/**
 * Archive page displays all previously-played puzzles.
 * Users can click on any past puzzle to play it.
 * Shows completion checkmarks and scores for puzzles the user has already played.
 */
export default function Archive() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const archivedPuzzles = getArchivedPuzzles();
  const [completedPuzzles, setCompletedPuzzles] = useState<Map<number, CompletedPuzzle>>(new Map());
  const [isLoading, setIsLoading] = useState(true);

  // Load completion status and scores from localStorage and Supabase
  useEffect(() => {
    const loadCompletionStatus = async () => {
      const completed = new Map<number, CompletedPuzzle>();
      
      // Check localStorage for each puzzle date
      archivedPuzzles.forEach(puzzle => {
        if (!puzzle.date) return;
        const dayNumber = getDayNumberForDate(puzzle.date);
        const storageKey = `ripple-game-state-${puzzle.date}`;
        
        try {
          const stored = localStorage.getItem(storageKey);
          if (stored) {
            const state = JSON.parse(stored);
            if (state.isComplete && state.answers) {
              const answers = state.answers.filter((a: boolean | null): a is boolean => a !== null);
              const points = calculatePoints(answers, state.hintUsedOnEvent);
              completed.set(dayNumber, { dayNumber, points });
            }
          }
        } catch (e) {
          // Ignore parse errors
        }
      });
      
      // If logged in, also check Supabase for completed puzzles (overrides localStorage)
      if (user) {
        const dayNumbers = archivedPuzzles.map(p => getDayNumberForDate(p.date!));
        
        const { data, error } = await supabase
          .from('game_results')
          .select('day_number, points')
          .eq('user_id', user.id)
          .in('day_number', dayNumbers);
        
        if (!error && data) {
          data.forEach(result => {
            completed.set(result.day_number, { 
              dayNumber: result.day_number, 
              points: result.points 
            });
          });
        }
      }
      
      setCompletedPuzzles(completed);
      setIsLoading(false);
    };
    
    loadCompletionStatus();
  }, [user, archivedPuzzles]);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  const completedCount = completedPuzzles.size;

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-lg mx-auto px-4 py-6">
        {/* Header */}
        <header className="flex items-center justify-between py-4 border-b border-border mb-6">
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigate('/')}
              aria-label="Back to today's puzzle"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="font-display text-2xl font-bold text-foreground tracking-tight">
                Archive
              </h1>
              <p className="text-xs text-muted-foreground">
                {completedCount > 0 
                  ? `${completedCount}/${archivedPuzzles.length} completed`
                  : `${archivedPuzzles.length} past puzzles`
                }
              </p>
            </div>
          </div>
          
          <Link to="/">
            <Button variant="outline" size="sm" className="gap-2">
              <span className="text-lg">🌊</span>
              Today's Ripple
            </Button>
          </Link>
        </header>

        {/* Archive list */}
        <div className="space-y-3">
          {archivedPuzzles.length === 0 ? (
            <Card className="border-dashed">
              <CardContent className="py-12 text-center">
                <ArchiveIcon className="w-12 h-12 mx-auto mb-4 text-muted-foreground/50" />
                <p className="text-muted-foreground">No archived puzzles yet.</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Check back tomorrow!
                </p>
              </CardContent>
            </Card>
          ) : (
            archivedPuzzles.map((puzzle) => {
              const dayNumber = getDayNumberForDate(puzzle.date!);
              const completedData = completedPuzzles.get(dayNumber);
              const isCompleted = !!completedData;
              
              return (
                <Card
                  key={puzzle.id}
                  className={cn(
                    "cursor-pointer transition-all hover:border-primary/50 hover:shadow-md",
                    "active:scale-[0.99]",
                    isCompleted && "border-correct/30 bg-correct/5"
                  )}
                  onClick={() => {
                    trackEvent('archive_puzzle_clicked', {
                      userId: user?.id,
                      metadata: { day_number: dayNumber, puzzle_date: puzzle.date, already_completed: isCompleted }
                    });
                    navigate(`/play/${puzzle.date}`);
                  }}
                >
                  <CardContent className="py-4 px-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {/* Date badge with completion indicator */}
                        <div className={cn(
                          "relative flex flex-col items-center justify-center w-14 h-14 rounded-lg",
                          isCompleted ? "bg-correct/20" : "bg-muted"
                        )}>
                          {isCompleted ? (
                            <Check className="w-6 h-6 text-correct" />
                          ) : (
                            <>
                              <Calendar className="w-4 h-4 text-muted-foreground mb-0.5" />
                              <span className="text-xs font-medium text-muted-foreground">
                                {formatDate(puzzle.date!).split(',')[0]}
                              </span>
                            </>
                          )}
                        </div>
                        
                        {/* Puzzle info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className={cn(
                              "text-xs font-medium px-2 py-0.5 rounded",
                              isCompleted 
                                ? "text-correct bg-correct/10" 
                                : "text-primary bg-primary/10"
                            )}>
                              #{dayNumber}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {formatDate(puzzle.date!)}
                            </span>
                          </div>
                          <h3 className={cn(
                            "font-medium truncate",
                            isCompleted ? "text-muted-foreground" : "text-foreground"
                          )}>
                            {puzzle.title}
                          </h3>
                        </div>
                      </div>
                      
                      {/* Score or arrow */}
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {isCompleted && completedData && (
                          <div className="text-right">
                            <span className={cn(
                              "text-sm font-semibold",
                              completedData.points === 300 
                                ? "text-correct" 
                                : completedData.points >= 200 
                                  ? "text-primary" 
                                  : "text-muted-foreground"
                            )}>
                              {completedData.points}
                            </span>
                            <span className="text-xs text-muted-foreground ml-1">pts</span>
                          </div>
                        )}
                        <ChevronRight className={cn(
                          "w-5 h-5",
                          isCompleted ? "text-correct" : "text-muted-foreground"
                        )} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })
          )}
        </div>

        {/* Info footer */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            <span className="text-lg">📚</span>
            Play past Ripples anytime
          </p>
          <p className="mt-1 text-xs">
            Archive plays don't affect your daily streak
          </p>
        </div>
      </div>
    </div>
  );
}