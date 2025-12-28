import { useGameState } from "@/hooks/useGameState";
import { useState, useEffect } from "react";
import { Header } from "./Header";
import { ProgressIndicator } from "./ProgressIndicator";
import { EventCard } from "./EventCard";
import { OptionCard } from "./OptionCard";
import { ExplanationCard } from "./ExplanationCard";
import { ResultsCard } from "./ResultsCard";
import { HowToPlayModal } from "./HowToPlayModal";
import { StatsModal } from "./StatsModal";
import { HintButton } from "./HintButton";
import { hasSeenTutorial, markTutorialSeen } from "@/lib/storage";

const OPTION_LABELS = ['A', 'B', 'C', 'D'];

export const GameBoard = () => {
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const {
    puzzle,
    dayNumber,
    currentEventIndex,
    currentEvent,
    answers,
    selectedAnswer,
    showExplanation,
    isComplete,
    hintUsed,
    hintUsedOnEvent,
    disabledOptions,
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

  // Show results when game completes
  useEffect(() => {
    if (isComplete) {
      // Small delay for better UX after seeing explanation
      const timer = setTimeout(() => {
        setShowResults(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isComplete]);

  // Reset results view when game is complete and user navigates back
  useEffect(() => {
    if (isComplete) {
      setShowResults(true);
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
            hintUsed={hintUsed}
            hintUsedOnEvent={hintUsedOnEvent}
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
            {currentEvent.options.map((option, index) => (
              <OptionCard
                key={index}
                label={OPTION_LABELS[index]}
                text={option}
                onClick={() => selectAnswer(index)}
                disabled={showExplanation}
                isSelected={selectedAnswer === index}
                isCorrect={showExplanation ? index === currentEvent.correctIndex : null}
                showResult={showExplanation}
                index={index}
                disabledByHint={disabledOptions.includes(index)}
              />
            ))}
          </div>

          {!showExplanation && (
            <HintButton
              onUseHint={useHint}
              disabled={showExplanation}
              hintUsed={hintUsed}
            />
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
