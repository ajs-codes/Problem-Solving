const prompt = require("readline-sync");

let n = prompt.question("Enter the number of rows: ");

for (let i = 0; i < n; i++) {
  var str = "";
  for (let j = 0; j < n - i; j++) {
    str += `${j + 1}`;
  }
  console.log(str);
}
