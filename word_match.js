let words = [
  "laboratory",
  "experiment",
  "flab",
  "Pans Labyrinth",
  "elaborate",
  "polar bear",
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

function allMatches(string, pattern) {
  let matches = [];
  for (let i = 0; i < string.length; i += 1) {
    if (pattern.test(string[i])) {
      matches.push(string[i]);
    }
  }
  return matches;
}
