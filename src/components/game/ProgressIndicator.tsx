import { cn } from "@/lib/utils";

interface ProgressIndicatorProps {
  current: number;
  total: number;
  answers: (boolean | null)[];
}

export const ProgressIndicator = ({ current, total, answers }: ProgressIndicatorProps) => {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: total }).map((_, index) => {
        const answer = answers[index];
        const isActive = index === current;
        const isPast = index < current;
        
        return (
          <div
            key={index}
            className={cn(
              "flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium transition-all duration-300",
              isActive && "bg-primary text-primary-foreground scale-110 shadow-md",
              !isActive && !isPast && "bg-muted text-muted-foreground",
              isPast && answer === true && "bg-correct text-correct-foreground",
              isPast && answer === false && "bg-incorrect text-incorrect-foreground",
              isPast && answer === null && "bg-muted text-muted-foreground"
            )}
          >
            {index + 1}
          </div>
        );
      })}
    </div>
  );
};
