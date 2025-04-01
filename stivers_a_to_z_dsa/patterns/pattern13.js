const process = require("node:process");
const prompt = require("readline-sync");

let n = Number(prompt.question("Enter the number of rows: "));

let count = 0;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    count += 1;
    process.stdout.write(count + " ");
  }
  console.log();
}