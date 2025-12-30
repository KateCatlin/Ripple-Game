import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Info } from "lucide-react";

interface ExplanationCardProps {
  explanation: string;
  isCorrect: boolean;
  onContinue: () => void;
  isLastEvent: boolean;
  onShowResults: () => void;
}

export const ExplanationCard = ({
  explanation,
  isCorrect,
  onContinue,
  isLastEvent,
  onShowResults,
}: ExplanationCardProps) => {
  return (
    <div 
      className={cn(
        "mt-6 p-5 rounded-xl border-2 animate-float-up",
        isCorrect 
          ? "bg-correct/10 border-correct/30" 
          : "bg-incorrect/10 border-incorrect/30"
      )}
    >
      <div className="flex items-start gap-3 mb-4">
        <div className={cn(
          "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
          isCorrect ? "bg-correct/20" : "bg-incorrect/20"
        )}>
          <Info className={cn(
            "w-4 h-4",
            isCorrect ? "text-correct" : "text-incorrect"
          )} />
        </div>
        <div>
          <p className={cn(
            "font-semibold mb-1",
            isCorrect ? "text-correct" : "text-incorrect"
          )}>
            {isCorrect ? "Correct!" : "Not quite..."}
          </p>
          <p className="text-foreground/80 leading-relaxed">
            {explanation}
          </p>
        </div>
      </div>
      
      <div className="flex justify-end">
        <Button
          onClick={isLastEvent ? onShowResults : onContinue}
          className="gap-2"
        >
          {isLastEvent ? "See Your Score" : "Next Event"}
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
