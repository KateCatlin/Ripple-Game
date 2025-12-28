import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface HowToPlayModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onStart?: () => void;
}

export const HowToPlayModal = ({ open, onOpenChange, onStart }: HowToPlayModalProps) => {
  const handleStart = () => {
    onOpenChange(false);
    onStart?.();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-center flex items-center justify-center gap-2">
            <span className="text-3xl">🌊</span>
            How to Play Ripple
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Step 1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
              1
            </div>
            <div>
              <h4 className="font-semibold mb-1">Read the Event</h4>
              <p className="text-sm text-muted-foreground">
                You'll see a real historical event — the start of a ripple effect.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
              2
            </div>
            <div>
              <h4 className="font-semibold mb-1">Predict the Consequence</h4>
              <p className="text-sm text-muted-foreground">
                Choose what happened next from 4 options. Think cause and effect!
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
              3
            </div>
            <div>
              <h4 className="font-semibold mb-1">Follow the Chain</h4>
              <p className="text-sm text-muted-foreground">
                Each answer reveals the next event. Complete 3 predictions in the chain.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
              4
            </div>
            <div>
              <h4 className="font-semibold mb-1">Share Your Results</h4>
              <p className="text-sm text-muted-foreground">
                See your chain score and share with friends. New puzzle every day!
              </p>
            </div>
          </div>

          {/* Example */}
          <div className="bg-muted/50 rounded-xl p-4 space-y-2">
            <p className="text-sm font-medium">Example:</p>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-6 h-6 rounded-full bg-correct text-correct-foreground flex items-center justify-center text-xs">✓</span>
              <span className="text-muted-foreground">Correct prediction</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-6 h-6 rounded-full bg-incorrect text-incorrect-foreground flex items-center justify-center text-xs">✗</span>
              <span className="text-muted-foreground">Wrong prediction (you'll learn why!)</span>
            </div>
          </div>

          <Button onClick={handleStart} className="w-full" size="lg">
            Let's Play!
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
