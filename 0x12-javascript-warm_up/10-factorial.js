#!/usr/bin/node
function computeFactorial(n) {
  // Base case: factorial of 0 is 1
  if (isNaN(n) || n < 0) {
    console.log("Factorial of NaN is 1");
    return 1;
  }
  if (n === 0) {
    return 1;
  } else {
    return n * computeFactorial(n - 1);
  }
}

function main() {
  const args = process.argv.slice(2);

  if (args.length !== 1) {
    console.log("Usage: node factorial.js <integer>");
    return;
  }

  const input = parseInt(args[0]);

  if (isNaN(input)) {
    console.log("Invalid input. Please provide a valid integer.");
    return;
  }

  const result = computeFactorial(input);
  console.log(`Factorial of ${input} is: ${result}`);
}

main();
