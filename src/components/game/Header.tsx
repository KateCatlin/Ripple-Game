import { Button } from "@/components/ui/button";
import { HelpCircle, BarChart3, Archive } from "lucide-react";
import { UserAvatar } from "./UserAvatar";
import { Link } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

interface HeaderProps {
  dayNumber: number;
  onShowHelp: () => void;
  onShowStats: () => void;
  isArchive?: boolean; // Whether this is an archive puzzle
  puzzleDate?: string; // The puzzle date if from archive
}

/**
 * Header component with navigation.
 * Archive link is placed between Stats and UserAvatar for discoverability.
 * It's grouped with other meta actions (Help, Stats) as a first-class navigation option.
 */
export const Header = ({ 
  dayNumber, 
  onShowHelp, 
  onShowStats, 
  isArchive = false,
  puzzleDate 
}: HeaderProps) => {
  return (
    <header className="flex items-center justify-between py-4 border-b border-border mb-6">
      <div className="flex items-center gap-3">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <span className="text-3xl animate-wave">🌊</span>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-display text-2xl font-bold text-foreground tracking-tight">
                Ripple
              </h1>
              {/* Show "From the Archive" badge for archive puzzles */}
              {isArchive && (
                <Badge variant="secondary" className="text-xs font-normal">
                  Archive
                </Badge>
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              #{dayNumber}
            </p>
          </div>
        </Link>
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
        
        {/* Archive link - positioned between Stats and UserAvatar for discoverability */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Link to="/archive">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Play past Ripples"
              >
                <Archive className="w-5 h-5" />
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Play past Ripples</p>
          </TooltipContent>
        </Tooltip>
        
        <UserAvatar />
      </div>
    </header>
  );
};
