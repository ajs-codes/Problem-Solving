const prompt = require("readline-sync");

let n = prompt.question("Enter the number of rows: ");

for (let i = 1; i <= n; i++) {
  var str = "";
  for (let j = 1; j <= i; j++) {
    str += `${j}`;
  }
  console.log(str);
}
