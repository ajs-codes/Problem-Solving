const process = require("node:process");
const prompt = require("readline-sync");

let n = Number(prompt.question("Enter the number of rows: "));

let char = "A".charCodeAt() + n;
for (let i = 1; i <= n; i++) {
  char -= i;
  for (let j = 1; j <= i; j++) {
    process.stdout.write(String.fromCharCode(char) + " ");
    char += 1;
  }
  console.log();
}
