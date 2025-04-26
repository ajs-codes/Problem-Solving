const process = require("node:process");
const prompt = require("readline-sync");

let n = Number(prompt.question("Enter the number of rows: "));

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(j.toString());
  }
  for (let j = 1; j <= 2 * n - 2 * i; j++) {
    process.stdout.write(" ");
  }
  for (let j = i; j >= 1; j--) {
    process.stdout.write(j.toString());
  }
  console.log();
}
