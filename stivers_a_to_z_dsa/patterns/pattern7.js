const prompt = require("readline-sync");

let n = prompt.question("Enter the number of rows: ");

for (let i = 1; i <= n; i++) {
  let str = "";
  for (let j = 1; j <= n - i + 1; j++) {
    str += " ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    str += "*";
  }
  console.log(str);
}
