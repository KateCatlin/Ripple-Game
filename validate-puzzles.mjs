import { puzzles } from './src/data/puzzles.ts';

let errors = [];
for (const puzzle of puzzles) {
  for (let i = 0; i < puzzle.events.length - 1; i++) {
    const correctOption = puzzle.events[i].options[puzzle.events[i].correctIndex];
    const nextEvent = puzzle.events[i + 1].event;
    if (correctOption !== nextEvent) {
      errors.push({
        puzzleId: puzzle.id,
        title: puzzle.title,
        eventIndex: i,
        correctOption: correctOption,
        nextEvent: nextEvent
      });
    }
  }
}

if (errors.length === 0) {
  console.log('✅ All puzzles satisfy the chaining rule!');
} else {
  console.log('❌ Found ' + errors.length + ' chaining errors:');
  for (const e of errors) {
    console.log('');
    console.log('Puzzle ' + e.puzzleId + ': ' + e.title);
    console.log('  Event ' + e.eventIndex + ' correct option: "' + e.correctOption + '"');
    console.log('  Event ' + (e.eventIndex + 1) + ' event: "' + e.nextEvent + '"');
  }
}
