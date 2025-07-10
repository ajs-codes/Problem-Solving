const process = require("node:process");

// print fibonacci series
function fibonacci(num, start = 0, iter = 1) {
  process.stdout.write(`${start} `);
  return num <= 1 ? "" : fibonacci((num -= 1), iter, start + iter);
}

console.log(fibonacci(10));

// print nth of fibonacci number
function fibonacciNth(n, start = 0, iter = 1) {
  return n <= 0 ? start : fibonacciNth(n - 1, iter, start + iter);
}

console.log(fibonacciNth(9));

// with multiple recursions

function fibonacciMulti(n) {
  return n <= 1 ? n : fibonacciMulti(n - 1) + fibonacciMulti(n - 2);
}

console.log(fibonacciMulti(4));
