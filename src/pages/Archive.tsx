import { useNavigate, Link } from "react-router-dom";
import { getArchivedPuzzles, getDayNumberForDate } from "@/data/puzzles";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, ChevronRight, Archive as ArchiveIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Archive page displays all previously-played puzzles.
 * Users can click on any past puzzle to play it.
 * 
 * Why Archive lives in the top-right navigation:
 * Archive is a first-class navigation option, grouped with other meta actions
 * (Help, Stats), making it immediately discoverable for users who want to
 * explore past puzzles.
 */
export default function Archive() {
  const navigate = useNavigate();
  const archivedPuzzles = getArchivedPuzzles();

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

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
                {archivedPuzzles.length} past puzzles
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
              
              return (
                <Card
                  key={puzzle.id}
                  className={cn(
                    "cursor-pointer transition-all hover:border-primary/50 hover:shadow-md",
                    "active:scale-[0.99]"
                  )}
                  onClick={() => navigate(`/play/${puzzle.date}`)}
                >
                  <CardContent className="py-4 px-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {/* Date badge */}
                        <div className="flex flex-col items-center justify-center w-14 h-14 rounded-lg bg-muted">
                          <Calendar className="w-4 h-4 text-muted-foreground mb-0.5" />
                          <span className="text-xs font-medium text-muted-foreground">
                            {formatDate(puzzle.date!).split(',')[0]}
                          </span>
                        </div>
                        
                        {/* Puzzle info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
                              #{dayNumber}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {formatDate(puzzle.date!)}
                            </span>
                          </div>
                          <h3 className="font-medium text-foreground truncate">
                            {puzzle.title}
                          </h3>
                        </div>
                      </div>
                      
                      {/* Arrow */}
                      <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
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