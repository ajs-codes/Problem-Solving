const process = require("node:process");
const prompt = require("readline-sync");

let n = Number(prompt.question("Enter the number of rows: "));

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if(i === 1 || i === n || j === 1 || j === n) {
            process.stdout.write("*" + " ")
        } else {
            process.stdout.write("  ");
        }
    }
    console.log();
}