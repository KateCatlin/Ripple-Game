import { Button } from "@/components/ui/button";
import { HelpCircle, BarChart3 } from "lucide-react";
import { UserAvatar } from "./UserAvatar";

interface HeaderProps {
  dayNumber: number;
  onShowHelp: () => void;
  onShowStats: () => void;
}

export const Header = ({ dayNumber, onShowHelp, onShowStats }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between py-4 border-b border-border mb-6">
      <div className="flex items-center gap-3">
        <span className="text-3xl animate-wave">🌊</span>
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground tracking-tight">
            Ripple
          </h1>
          <p className="text-xs text-muted-foreground">
            #{dayNumber}
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={onShowHelp}
          aria-label="How to play"
        >
          <HelpCircle className="w-5 h-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={onShowStats}
          aria-label="Statistics"
        >
          <BarChart3 className="w-5 h-5" />
        </Button>
        <UserAvatar />
      </div>
    </header>
  );
};
