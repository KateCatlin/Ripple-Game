# Contributing to Ripple 🌊

Thanks for your interest in contributing to Ripple! Whether you're submitting puzzle chains, fixing bugs, or suggesting features, we're excited to have you here.

This guide will help you understand how to contribute effectively, with a focus on puzzle chain submissions since that's where we need the most help.

---

## Table of Contents

- [How the Game Works](#how-the-game-works)
- [How to Contribute](#how-to-contribute)
- [Submitting Puzzle Chains](#submitting-puzzle-chains)
  - [Puzzle Format](#puzzle-format)
  - [Content Quality Guidelines](#content-quality-guidelines)
  - [Good vs. Bad Puzzles](#good-vs-bad-puzzles)
  - [Example Puzzle Chain](#example-puzzle-chain)
- [Testing Your Puzzles Locally](#testing-your-puzzles-locally)
- [Categories We're Looking For](#categories-were-looking-for)
- [Questions?](#questions)

---

## How the Game Works

Ripple is a **daily cause-and-effect prediction game**. Unlike traditional trivia that tests static knowledge ("What year did X happen?"), Ripple tests **causal reasoning**.

Here's how it works:

1. Players see a real historical event
2. They predict what happened NEXT from 4 options (only 1 is correct)
3. If they get it right, they continue the chain—3 events deep
4. The goal is to follow the "ripple effect" of consequences

**Key insight for contributors:** The best puzzles feel like detective work. When players see the correct answer, they should think "Oh, that makes sense!" not "I never could have guessed that."

---

## How to Contribute

### Fork → Branch → PR Workflow

1. **Fork the repository** — Click the "Fork" button on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/Ripple-Game.git
   cd Ripple-Game
   ```
3. **Create a feature branch**:
   ```bash
   git checkout -b puzzle/your-puzzle-name
   ```
4. **Make your changes** — Add puzzle chains to `src/data/puzzles.ts`
5. **Test locally** — Make sure your puzzle works (see [Testing Your Puzzles Locally](#testing-your-puzzles-locally))
6. **Commit your changes**:
   ```bash
   git commit -m "Add puzzle: Your Puzzle Title"
   ```
7. **Push to your fork**:
   ```bash
   git push origin puzzle/your-puzzle-name
   ```
8. **Open a Pull Request** — Go to the original repo and click "New Pull Request"

---

## Submitting Puzzle Chains

### Puzzle Format

Puzzles are defined in `src/data/puzzles.ts`. Here's the TypeScript interface you need to follow:

```typescript
interface PuzzleEvent {
  event: string;          // The event description players see
  options: string[];      // Exactly 4 possible answers
  correctIndex: number;   // Index of correct answer (0-3)
  explanation: string;    // Shown after answering - explains why this happened
}

interface Puzzle {
  id: number;             // Will be assigned - use next available number
  title: string;          // Catchy title for the puzzle chain
  events: PuzzleEvent[];  // Array of 3 events (the chain)
}
```

#### Template for Your Submission

Copy this template when adding a new puzzle:

```typescript
{
  id: 31,  // Use the next available ID (check the last puzzle in the array and add 1)
  title: "Your Catchy Title Here",
  events: [
    {
      event: "YEAR: First event - the starting point of the chain",
      options: [
        "Wrong answer 1 - plausible but didn't happen",
        "Correct answer - what actually happened next",
        "Wrong answer 2 - plausible but didn't happen",
        "Wrong answer 3 - plausible but didn't happen"
      ],
      correctIndex: 1,  // Index of correct answer (0-3)
      explanation: "Explain why this happened and add interesting context."
    },
    {
      event: "Second event - consequence of the first",
      options: [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      correctIndex: 0,
      explanation: "Explain the connection and add fascinating details."
    },
    {
      event: "Third event - consequence of the second",
      options: [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      correctIndex: 3,
      explanation: "Wrap up the chain with the final consequence and its significance."
    }
  ]
}
```

### Content Quality Guidelines

Every puzzle submission must meet these standards:

#### ✅ Required
- **Historically accurate** — All events must be real and verifiable
- **Clear sources** — Be ready to cite where you found your information
- **Cause-and-effect relationship** — Each event must directly cause or lead to the next
- **Reasonable timeframe** — Consequences should happen within days to ~2 years
- **Plausible wrong answers** — All 4 options should seem believable
- **Helpful explanations** — Each explanation should teach something interesting

#### ⚠️ Avoid
- Events that are too recent or controversial (facts still disputed)
- Obscure events requiring deep domain expertise
- Tenuous connections where events just happened to occur sequentially
- Wrong answers that are obviously fake or absurd
- Vague or generic event descriptions

### Good vs. Bad Puzzles

Understanding what makes a good puzzle will help you submit quality content:

#### ✅ Good Puzzles Have:

| Criteria | Why It Matters |
|----------|----------------|
| **Clear cause-and-effect** | Players should feel "oh, that makes sense!" when they see the answer |
| **Logical timeframes** | Consequences within days to ~2 years (not decades) |
| **Plausible wrong answers** | Make players pause and think—no obviously fake options |
| **Specific, memorable events** | "CEO gave tearful apology on national TV" beats "CEO resigned" |
| **Narrative arc** | The chain teaches something about how the world works |
| **Verifiable facts** | Clear sources you can point to |
| **Accessibility** | Understandable even if you don't know the starting event |

#### ❌ Bad Puzzles Have:

| Problem | Example |
|---------|---------|
| **Tenuous connections** | Events just happened sequentially, not causally |
| **10+ year gaps** | Loses the "ripple effect" feeling |
| **Absurd wrong answers** | "Aliens visit Earth" as an option |
| **Vague events** | "Company did well" instead of specific outcomes |
| **Boring outcomes** | "Stock went up" → "Stock went up more" |
| **Obscure topics** | Requires PhD-level knowledge to understand |
| **Debatable causality** | Multiple "correct" answers could work |
| **Disputed facts** | Too recent or politically charged |

#### Examples

✅ **GOOD chain:**
```
New Coke (1985) → Classic Coke returns (1985) → Sales surge past Pepsi (1986) → Case study taught in business schools
```
*Clear cause-and-effect, reasonable timeframe, teaches something interesting*

❌ **BAD chain:**
```
New Coke launches → Coca-Cola still exists today
```
*Too obvious, spans too long, boring*

❌ **BAD wrong answer:**
```
New Coke launches → Options include "Aliens visit Earth"
```
*Absurd option breaks immersion*

### Example Puzzle Chain

Here's a complete, well-structured puzzle from our collection:

```typescript
{
  id: 5,
  title: "Netflix's Blockbuster Mistake",
  events: [
    {
      event: "2000: Netflix offers to sell itself to Blockbuster for $50 million",
      options: [
        "Blockbuster acquires Netflix",
        "Blockbuster CEO laughs them out of the room",
        "Netflix accepts lower counter-offer",
        "Deal falls through due to regulations"
      ],
      correctIndex: 1,
      explanation: "Blockbuster CEO John Antioco reportedly laughed at the offer, calling Netflix a 'very small niche business.' It's now worth over $150 billion."
    },
    {
      event: "Blockbuster rejects Netflix acquisition",
      options: [
        "Netflix goes bankrupt within a year",
        "Blockbuster launches competing service",
        "Netflix pivots to streaming technology",
        "Both companies merge years later"
      ],
      correctIndex: 2,
      explanation: "Netflix invested heavily in streaming technology, launching its streaming service in 2007 — fundamentally changing how people consume entertainment."
    },
    {
      event: "Netflix launches streaming service in 2007",
      options: [
        "Blockbuster immediately copies the model",
        "Cable companies buy Blockbuster",
        "Streaming fails, DVD remains dominant",
        "Blockbuster files for bankruptcy in 2010"
      ],
      correctIndex: 3,
      explanation: "Blockbuster filed for bankruptcy in 2010. Today, only one Blockbuster store remains — in Bend, Oregon — while Netflix has 230+ million subscribers."
    }
  ]
}
```

**Why this puzzle works:**
- Each event clearly causes the next
- Timeframes are reasonable (years, not decades)
- Wrong answers are all plausible business outcomes
- The narrative arc is satisfying (hubris → disruption → downfall)
- Even if you don't know the story, you can reason through it

---

## Testing Your Puzzles Locally

Before submitting, make sure your puzzle works correctly:

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Development Server

```bash
npm run dev
```

The app will run at `http://localhost:5173`

### 3. Find Your Puzzle

The game shows one puzzle per day based on the date. There are a few ways to test your specific puzzle:

#### Option A: Use Browser Console (Recommended)
Open browser dev tools (F12) and in the console, you can inspect the puzzle data directly without modifying any code.

#### Option B: Temporarily Modify for Testing
If you need to see your puzzle in the full UI, you can temporarily modify the puzzle selection in `src/data/puzzles.ts`:

```typescript
// Temporarily change getPuzzleForDay to return your puzzle for testing:
export const getPuzzleForDay = (date: Date = new Date()): Puzzle => {
  // Return your puzzle directly for testing
  return puzzles[puzzles.length - 1]; // Gets the last puzzle (your new one)
};
```

> ⚠️ **IMPORTANT:** You MUST revert this change before submitting your PR! Use `git checkout src/data/puzzles.ts` to restore the original function, or your PR will be rejected.

### 4. Verify Your Puzzle

- [ ] All 4 options display correctly
- [ ] Correct answer is properly marked
- [ ] Explanations appear after each answer
- [ ] No typos or formatting issues
- [ ] The chain makes logical sense

### 5. Run the Build

Make sure there are no TypeScript errors:

```bash
npm run build
```

---

## Categories We're Looking For

We're especially interested in puzzle chains from these categories:

| Category | Examples |
|----------|----------|
| **Business** | Corporate pivots, product launches, acquisitions, market disruptions |
| **Science** | Discoveries, inventions, medical breakthroughs, accidents that led to innovations |
| **Tech** | Product launches, company origins, technological disruptions |
| **Politics** | Policy decisions, elections, diplomatic events, unintended consequences |
| **Culture** | Viral moments, entertainment industry, social movements, media events |

---

## Questions?

- **Found a bug?** [Open an issue](../../issues)
- **Have an idea?** [Open an issue](../../issues)  
- **Need help with your submission?** [Open an issue](../../issues) with the "question" label

Thanks again for contributing! Every puzzle chain you submit helps make Ripple more engaging for players around the world. 🌊
