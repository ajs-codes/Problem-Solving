// Count from N to 0 using recursion
const process = require("node:process");

function countDown(num) {
    if (num === 0) return "";
    process.stdout.write(num + " ");
    return countDown(num - 1);
}

// test cases
console.log(countDown(5)); // 5 4 3 2 1
console.log(countDown(10)); // 10 9 8 7 6 5 4 3 2 1
console.log(countDown(0)); // 0

// Count from 0 to N using recursion
function countUp(limit, num) {
    process.stdout.write(limit + " ");
    return (num === limit) ? '' : countUp(limit + 1, num);
}

// test cases
console.log(countUp(1, 5)); // 0 1 2 3 4 5
console.log(countUp(1, 10)); // 0 1 2 3 4 5 6 7 8 9 10

// Print a sentence N times using recursion
function printText(str, n) {
    console.log(str);
    return (n === 1) ? '' : printText(str, n - 1);
}

// test cases
console.log(printText("I am Sharan", 10));