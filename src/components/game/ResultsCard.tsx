import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Share2, Check, BarChart3, ArrowLeft, Library } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { LoginPromptCard, shouldShowLoginPrompt } from "./LoginPromptCard";
import { ComparisonCard } from "./ComparisonCard";
import { saveGameResult, migrateLocalStorageToSupabase, calculatePoints, saveArchiveGameResult } from "@/lib/supabaseStats";
import { useToast } from "@/hooks/use-toast";
import { RippleCelebration } from "./RippleCelebration";
import { trackEvent } from "@/lib/analytics";

interface ResultsCardProps {
  dayNumber: number;
  answers: boolean[];
  puzzleTitle: string;
  shareText: string;
  onShowStats: () => void;
  hintUsedOnEvent: number | null;
  hintUsed: boolean;
  isArchive?: boolean; // Whether this is an archive puzzle
}

export const ResultsCard = ({
  dayNumber,
  answers,
  puzzleTitle,
  shareText,
  onShowStats,
  hintUsedOnEvent,
  hintUsed,
  isArchive = false,
}: ResultsCardProps) => {
  const [copied, setCopied] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [hasSaved, setHasSaved] = useState(false);
  const hasTrackedCompletion = useRef(false);
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const correctCount = answers.filter(Boolean).length;
  const totalCount = answers.length;
  const points = calculatePoints(answers, hintUsedOnEvent);
  const isPerfectScore = points === 300;

  // Track game completion event
  useEffect(() => {
    if (!hasTrackedCompletion.current) {
      hasTrackedCompletion.current = true;
      trackEvent('game_completed', {
        userId: user?.id,
        metadata: { dayNumber, points, correctCount, hintUsed, isArchive }
      });
      
      // Also track archive-specific completion for funnel analysis
      if (isArchive) {
        trackEvent('archive_puzzle_completed', {
          userId: user?.id,
          metadata: { dayNumber, points, correctCount, hintUsed }
        });
      }
    }
  }, []);

  // Handle data migration and saving for logged-in users
  useEffect(() => {
    const handleUserData = async () => {
      if (user && !hasSaved) {
        // First, try to migrate localStorage data (only for daily puzzles)
        if (!isArchive) {
          const didMigrate = await migrateLocalStorageToSupabase(user.id);
          
          if (didMigrate) {
            toast({
              title: "Progress saved!",
              description: "Your previous game data has been synced to your account.",
            });
          }
        }
        
        /**
         * Save game result to Supabase.
         * Archive plays are tracked for history but don't affect streaks.
         */
        if (isArchive) {
          await saveArchiveGameResult(user.id, dayNumber, answers, hintUsed, hintUsedOnEvent);
        } else {
          await saveGameResult(user.id, dayNumber, answers, hintUsed, hintUsedOnEvent);
        }
        setHasSaved(true);
      }
    };
    
    handleUserData();
  }, [user, dayNumber, answers, hintUsed, hintUsedOnEvent, hasSaved, toast, isArchive]);

  // Determine if we should show login prompt
  useEffect(() => {
    if (!user && shouldShowLoginPrompt()) {
      setShowLoginPrompt(true);
    }
  }, [user]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Ripple #${dayNumber}`,
          text: shareText,
        });
      } catch (e) {
        handleCopy();
      }
    } else {
      handleCopy();
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getMessage = () => {
    if (points === 300) return "Perfect chain! 🌊";
    if (points >= 200) return "Great ripple effect!";
    if (points >= 100) return "History is tricky!";
    return "Keep exploring!";
  };

  return (
    <>
      {isPerfectScore && <RippleCelebration />}
      <Card className="animate-float-up border-2">
        <CardHeader className="text-center pb-4">
          <div className="text-4xl mb-2">🌊</div>
          <CardTitle className="font-display text-2xl">
            Ripple #{dayNumber}
          </CardTitle>
          <p className="text-muted-foreground">{puzzleTitle}</p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Score display with points */}
          <div className="text-center">
            <div className="inline-flex items-baseline gap-1 mb-1">
              <span className="text-5xl font-display font-bold text-primary">
                {correctCount}
              </span>
              <span className="text-2xl text-muted-foreground">/{totalCount}</span>
            </div>
            <p className="text-lg font-semibold text-secondary">
              {points} points
            </p>
            {hintUsed && hintUsedOnEvent !== null && (
              <p className="text-sm text-muted-foreground mt-1">
                💡 50/50 used on Event {hintUsedOnEvent + 1}
              </p>
            )}
            <p className="text-base font-medium mt-2">{getMessage()}</p>
          </div>

          {/* Chain visualization */}
          <div className="flex justify-center gap-3">
            {answers.map((correct, index) => {
              const usedHintOnThis = correct && hintUsedOnEvent === index;
              return (
                <div
                  key={index}
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold transition-all",
                    usedHintOnThis
                      ? "bg-hint text-hint-foreground"
                      : correct 
                        ? "bg-correct text-correct-foreground" 
                        : "bg-incorrect text-incorrect-foreground"
                  )}
                >
                  {usedHintOnThis ? "💡" : correct ? "✓" : "✗"}
                </div>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3">
            {/* Primary CTA - Keep Playing (daily puzzles) or Back to Archive (archive puzzles) */}
            {isArchive ? (
              <Button 
                onClick={() => navigate('/archive')} 
                size="lg" 
                className="w-full gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Archive
              </Button>
            ) : (
              <Button 
                onClick={() => {
                  trackEvent('archive_cta_clicked', {
                    metadata: { from: 'results_page', day_number: dayNumber }
                  });
                  navigate('/archive');
                }} 
                size="lg" 
                className="w-full gap-2"
              >
                <Library className="w-5 h-5" />
                Keep Playing — Explore Past Puzzles
              </Button>
            )}
            
            {/* Secondary Actions - Side by Side */}
            <div className="flex gap-3">
              <Button 
                onClick={onShowStats} 
                variant="outline" 
                className="flex-1 gap-2"
              >
                <BarChart3 className="w-4 h-4" />
                Stats
              </Button>
              <Button 
                onClick={handleShare} 
                variant="outline" 
                className="flex-1 gap-2"
              >
                {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                {copied ? "Copied" : "Share"}
              </Button>
            </div>
          </div>

          {/* Next puzzle countdown - only for today's puzzle */}
          {!isArchive && <CountdownToMidnight />}
          
          {/* Info for archive puzzles */}
          {isArchive && (
            <div className="text-center pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                📚 From the Archive
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                This play doesn't affect your daily streak
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* How You Compared Today - only for logged-in users and daily puzzles */}
      {user && hasSaved && !isArchive && (
        <ComparisonCard dayNumber={dayNumber} hintUsed={hintUsed} />
      )}

      {/* Login prompt for non-authenticated users */}
      {showLoginPrompt && !user && (
        <LoginPromptCard onDismiss={() => setShowLoginPrompt(false)} />
      )}
    </>
  );
};

const CountdownToMidnight = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeUntilMidnightHST());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeUntilMidnightHST());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center pt-4 border-t border-border">
      <p className="text-sm text-muted-foreground mb-1">Next puzzle in</p>
      <p className="text-xl font-mono font-medium text-foreground">
        {timeLeft}
      </p>
      <p className="text-xs text-muted-foreground mt-1">
        Resets at midnight Hawaii time
      </p>
    </div>
  );
};

/**
 * Calculate time remaining until midnight HST (Hawaii Standard Time).
 * HST is UTC-10, no daylight saving time.
 */
function getTimeUntilMidnightHST(): string {
  const now = new Date();
  
  // Get the current time in HST
  const hstFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Pacific/Honolulu',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
  
  const parts = hstFormatter.formatToParts(now);
  const getPart = (type: string) => parts.find(p => p.type === type)?.value || '0';
  
  const hstHours = parseInt(getPart('hour'), 10);
  const hstMinutes = parseInt(getPart('minute'), 10);
  const hstSeconds = parseInt(getPart('second'), 10);
  
  // Calculate seconds until midnight HST
  const secondsUntilMidnight = 
    (24 - hstHours - 1) * 3600 + 
    (60 - hstMinutes - 1) * 60 + 
    (60 - hstSeconds);
  
  const hours = Math.floor(secondsUntilMidnight / 3600);
  const minutes = Math.floor((secondsUntilMidnight % 3600) / 60);
  const seconds = secondsUntilMidnight % 60;
  
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}