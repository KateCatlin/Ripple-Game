import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";

interface OptionCardProps {
  label: string;
  text: string;
  onClick: () => void;
  disabled: boolean;
  isSelected: boolean;
  isCorrect: boolean | null;
  showResult: boolean;
  index: number;
}

export const OptionCard = ({
  label,
  text,
  onClick,
  disabled,
  isSelected,
  isCorrect,
  showResult,
  index,
}: OptionCardProps) => {
  const isCorrectAnswer = showResult && isCorrect === true;
  const isWrongAnswer = showResult && isSelected && isCorrect === false;
  const isRevealedCorrect = showResult && !isSelected && isCorrect === true;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "w-full text-left p-4 rounded-xl border-2 transition-all duration-300",
        "animate-float-up opacity-0",
        "focus:outline-none focus:ring-2 focus:ring-primary/50",
        !showResult && !disabled && "hover:-translate-y-0.5 hover:shadow-lg hover:border-primary/30 active:scale-[0.99]",
        !showResult && "bg-card border-border",
        isCorrectAnswer && "bg-correct/15 border-correct shadow-lg",
        isWrongAnswer && "bg-incorrect/15 border-incorrect",
        isRevealedCorrect && "bg-correct/10 border-correct/50",
        showResult && !isCorrectAnswer && !isWrongAnswer && !isRevealedCorrect && "opacity-50",
        disabled && !showResult && "cursor-not-allowed opacity-60"
      )}
      style={{ animationDelay: `${index * 0.08}s`, animationFillMode: 'forwards' }}
    >
      <div className="flex items-start gap-3">
        <span 
          className={cn(
            "flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold",
            !showResult && "bg-primary/10 text-primary",
            isCorrectAnswer && "bg-correct text-correct-foreground",
            isWrongAnswer && "bg-incorrect text-incorrect-foreground",
            isRevealedCorrect && "bg-correct/30 text-correct"
          )}
        >
          {isCorrectAnswer || isRevealedCorrect ? (
            <Check className="w-4 h-4" />
          ) : isWrongAnswer ? (
            <X className="w-4 h-4" />
          ) : (
            label
          )}
        </span>
        <span className={cn(
          "text-foreground leading-snug",
          showResult && !isCorrectAnswer && !isWrongAnswer && !isRevealedCorrect && "text-muted-foreground"
        )}>
          {text}
        </span>
      </div>
    </button>
  );
};
