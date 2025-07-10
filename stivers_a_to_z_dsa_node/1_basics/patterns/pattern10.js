const prompt = require("readline-sync");

let n = Number(prompt.question("Enter the number of rows: "));

for (let i = 1; i <= 2 * n - 1; i++) {
  let str = "";
  if (i <= n) {
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
  } else {
    for (let j = 1; j <= 2 * n - i; j++) {
      str += "*";
    }
  }
  console.log(str);
}
