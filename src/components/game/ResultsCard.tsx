import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Share2, Copy, Check, BarChart3 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ResultsCardProps {
  dayNumber: number;
  answers: boolean[];
  puzzleTitle: string;
  shareText: string;
  onShowStats: () => void;
  hintUsedOnEvent: number | null;
}

export const ResultsCard = ({
  dayNumber,
  answers,
  puzzleTitle,
  shareText,
  onShowStats,
  hintUsedOnEvent,
}: ResultsCardProps) => {
  const [copied, setCopied] = useState(false);
  const correctCount = answers.filter(Boolean).length;
  const totalCount = answers.length;
  const percentage = Math.round((correctCount / totalCount) * 100);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Ripple #${dayNumber}`,
          text: shareText,
        });
      } catch (e) {
        // User cancelled or share failed
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
    if (percentage === 100) return "Perfect chain! 🌊";
    if (percentage >= 66) return "Great ripple effect!";
    if (percentage >= 33) return "History is tricky!";
    return "Keep exploring!";
  };

  return (
    <Card className="animate-float-up border-2">
      <CardHeader className="text-center pb-4">
        <div className="text-4xl mb-2">🌊</div>
        <CardTitle className="font-display text-2xl">
          Ripple #{dayNumber}
        </CardTitle>
        <p className="text-muted-foreground">{puzzleTitle}</p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Score display */}
        <div className="text-center">
          <div className="inline-flex items-baseline gap-1 mb-2">
            <span className="text-5xl font-display font-bold text-primary">
              {correctCount}
            </span>
            <span className="text-2xl text-muted-foreground">/{totalCount}</span>
          </div>
          <p className="text-lg font-medium">{getMessage()}</p>
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

        {/* Share text preview */}
        <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm whitespace-pre-line text-muted-foreground">
          {shareText.split('\n').slice(0, 5).join('\n')}
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <Button 
            onClick={handleShare} 
            size="lg" 
            className="w-full gap-2"
          >
            {copied ? (
              <>
                <Check className="w-5 h-5" />
                Copied!
              </>
            ) : (
              <>
                <Share2 className="w-5 h-5" />
                Share Results
              </>
            )}
          </Button>
          
          <Button 
            onClick={onShowStats} 
            variant="outline" 
            size="lg" 
            className="w-full gap-2"
          >
            <BarChart3 className="w-5 h-5" />
            View Statistics
          </Button>
        </div>

        {/* Next puzzle countdown */}
        <CountdownToMidnight />
      </CardContent>
    </Card>
  );
};

const CountdownToMidnight = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeUntilMidnight());

  useState(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeUntilMidnight());
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="text-center pt-4 border-t border-border">
      <p className="text-sm text-muted-foreground mb-1">Next puzzle in</p>
      <p className="text-xl font-mono font-medium text-foreground">
        {timeLeft}
      </p>
    </div>
  );
};

function getTimeUntilMidnight(): string {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  
  const diff = midnight.getTime() - now.getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
