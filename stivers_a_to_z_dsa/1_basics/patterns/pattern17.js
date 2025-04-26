const process = require("node:process");
const prompt = require("readline-sync");

let n = Number(prompt.question("Enter the number of rows: "));

for (let i = 1; i <= n; i++) {
  let char = "A".charCodeAt() - 1;
  for (let j = 1; j <= n - i + 1; j++) {
    process.stdout.write(" ");
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    if (j <= i) {
      char += 1;
    } else {
      char -= 1;
    }
    process.stdout.write(String.fromCharCode(char));
  }
  console.log();
}
