const process = require("node:process");
const prompt = require("readline-sync");

let n = Number(prompt.question("Enter the number of rows: "));

for (let i = 0; i < n; i++) {
  let char = "A".charCodeAt();
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write(String.fromCharCode(char));
    char += 1;
  }
  console.log();
}
