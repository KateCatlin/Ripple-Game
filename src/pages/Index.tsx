import { GameBoard } from "@/components/game/GameBoard";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Ripple - Daily Cause & Effect Puzzle Game</title>
        <meta name="description" content="Test your knowledge of history's domino effects. Predict what happened next in famous historical events. New puzzle every day!" />
        <link rel="canonical" href="https://playripple.com" />
        <meta property="og:title" content="Ripple - Daily Cause & Effect Puzzle" />
        <meta property="og:description" content="Trace the domino effect of historical events. New puzzle every day!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://playripple.com" />
        <meta property="og:image" content="https://playripple.com/og-image.png" />
      </Helmet>
      <GameBoard />
    </>
  );
};

export default Index;
