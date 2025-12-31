import { useGameState } from "@/hooks/useGameState";
import { useState, useEffect, useRef } from "react";
import { Header } from "./Header";
import { ProgressIndicator } from "./ProgressIndicator";
import { EventCard } from "./EventCard";
import { OptionCard } from "./OptionCard";
import { ExplanationCard } from "./ExplanationCard";
import { ResultsCard } from "./ResultsCard";
import { HowToPlayModal } from "./HowToPlayModal";
import { StatsModal } from "./StatsModal";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { hasSeenTutorial, markTutorialSeen } from "@/lib/storage";
import { Button } from "@/components/ui/button";
import { Lightbulb } from "lucide-react";

const OPTION_LABELS = ['A', 'B', 'C', 'D'];

export const GameBoard = () => {
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const isInitialMount = useRef(true);

  const {
    puzzle,
    dayNumber,
    currentEventIndex,
    currentEvent,
    shuffledOptions,
    shuffledCorrectIndex,
    answers,
    selectedAnswer,
    showExplanation,
    isComplete,
    hintUsed,
    hintUsedOnEvent,
    eliminatedOptions,
    selectAnswer,
    nextEvent,
    useHint,
    getShareText,
    getScore,
  } = useGameState();

  // Show tutorial on first visit
  useEffect(() => {
    if (!hasSeenTutorial()) {
      setShowHowToPlay(true);
    }
  }, []);

  const handleTutorialComplete = () => {
    markTutorialSeen();
  };

  // Show results only on initial mount if game was already complete (restored from storage)
  // Don't auto-show results when isComplete changes during gameplay - let user click the button
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      if (isComplete) {
        setShowResults(true);
      }
    }
  }, [isComplete]);

  if (showResults && isComplete) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container max-w-lg mx-auto px-4 py-6">
          <Header 
            dayNumber={dayNumber} 
            onShowHelp={() => setShowHowToPlay(true)} 
            onShowStats={() => setShowStats(true)} 
          />
          
          <ResultsCard
            dayNumber={dayNumber}
            answers={answers.filter((a): a is boolean => a !== null)}
            puzzleTitle={puzzle.title}
            shareText={getShareText()}
            onShowStats={() => setShowStats(true)}
            hintUsedOnEvent={hintUsedOnEvent}
            hintUsed={hintUsed}
          />

          <HowToPlayModal 
            open={showHowToPlay} 
            onOpenChange={setShowHowToPlay}
          />
          <StatsModal 
            open={showStats} 
            onOpenChange={setShowStats} 
          />
        </div>
      </div>
    );
  }

  if (!currentEvent) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading puzzle...</p>
      </div>
    );
  }

  const currentAnswer = answers[currentEventIndex];
  const isCorrect = currentAnswer === true;

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-lg mx-auto px-4 py-6">
        <Header 
          dayNumber={dayNumber} 
          onShowHelp={() => setShowHowToPlay(true)} 
          onShowStats={() => setShowStats(true)} 
        />

        <ProgressIndicator
          current={currentEventIndex}
          total={puzzle.events.length}
          answers={answers}
        />

        <div className="mt-6">
          <EventCard 
            event={currentEvent.event} 
            isNew={currentEventIndex > 0}
          />

          <p className="text-sm font-medium text-muted-foreground mb-4 text-center">
            What happened next?
          </p>

          <div className="space-y-3">
            {shuffledOptions.map((option, index) => (
              <OptionCard
                key={index}
                label={OPTION_LABELS[index]}
                text={option}
                onClick={() => selectAnswer(index)}
                disabled={showExplanation}
                isSelected={selectedAnswer === index}
                isCorrect={showExplanation ? index === shuffledCorrectIndex : null}
                showResult={showExplanation}
                index={index}
                isEliminated={eliminatedOptions.includes(index)}
              />
            ))}
          </div>

          {!showExplanation && (
            <div className="mt-4 flex justify-center">
                {/* Tooltip clarifies what the 50/50 hint does and its scoring tradeoff */}
                <TooltipProvider delayDuration={150}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={useHint}
                        disabled={hintUsed}
                        className="gap-2 text-muted-foreground hover:text-foreground"
                      >
                        <Lightbulb className="w-4 h-4" />
                        {hintUsed ? "50/50 Hint Used" : "50/50 Hint"}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="top" align="center" className="max-w-xs text-center">
                      Use this once per game to remove two incorrect answers. You’ll earn half the usual points (50 instead of 100) for this question if you get it right.
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
            </div>
          )}

          {showExplanation && (
            <ExplanationCard
              explanation={currentEvent.explanation}
              isCorrect={isCorrect}
              onContinue={nextEvent}
              isLastEvent={currentEventIndex >= puzzle.events.length - 1}
              onShowResults={() => setShowResults(true)}
            />
          )}
        </div>

        <HowToPlayModal 
          open={showHowToPlay} 
          onOpenChange={setShowHowToPlay}
          onStart={handleTutorialComplete}
        />
        <StatsModal 
          open={showStats} 
          onOpenChange={setShowStats} 
        />
      </div>
    </div>
  );
};
