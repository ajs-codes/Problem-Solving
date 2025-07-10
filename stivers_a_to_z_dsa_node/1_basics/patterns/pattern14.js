const process = require("node:process");
const prompt = require("readline-sync");

let n = Number(prompt.question("Enter the number of rows: "));

for (let i = 1; i <= n; i++) {
  let char = "A".charCodeAt();
  for (let j = 1; j <= i; j++) {
    process.stdout.write(String.fromCharCode(char) + " ");
    count += 1;
  }
  console.log();
}
