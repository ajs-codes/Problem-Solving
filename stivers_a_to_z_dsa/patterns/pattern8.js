const prompt = require("readline-sync");

let n = prompt.question("Enter the number of rows: ");

for (let i = 0; i < n; i++) {
  let str = "";
  for (let j = 0; j < i; j++) {
    str += " ";
  }
  for (let j = 0; j < 2 * n - 2 * i - 1; j++) {
    str += "*";
  }
  console.log(str);
}
