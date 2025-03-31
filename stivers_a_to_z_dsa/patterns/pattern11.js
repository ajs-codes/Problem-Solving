const prompt = require("readline-sync");

let n = Number(prompt.question("Enter the number of rows: "));

for (let i = 1; i <= n; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += (i + j) % 2 === 0 ? "1" : "0";
  }
  console.log(str);
}
