import { Button } from "@/components/ui/button";
import { Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

interface HintButtonProps {
  onUseHint: () => void;
  disabled: boolean;
  hintUsed: boolean;
}

export const HintButton = ({ onUseHint, disabled, hintUsed }: HintButtonProps) => {
  return (
    <div className="flex justify-center my-4">
      <Button
        onClick={onUseHint}
        disabled={disabled || hintUsed}
        variant="outline"
        size="default"
        className={cn(
          "gap-2 transition-all",
          hintUsed && "opacity-50 cursor-not-allowed"
        )}
      >
        <Lightbulb className="w-4 h-4" />
        {hintUsed ? "Hint Used" : "50/50 Hint"}
      </Button>
    </div>
  );
};
