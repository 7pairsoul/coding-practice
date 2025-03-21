const readline = require("readline"); // For getting user input

function isOdd(n) {
  return Math.abs(n % 2) == 1;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Give me a number: ", function (answer) {
  console.log(`The number you gave me is ${isOdd(answer) ? 'odd' : 'even'}`);
  rl.close();
});
