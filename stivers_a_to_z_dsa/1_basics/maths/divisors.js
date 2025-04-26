function divisor(n) {
  let divisors = [];
  if (n === 0) return "0 has infinite divisors";
  for (let i = 1; i <= Math.abs(n); i++) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }
  if (n < 0) {
    for (let i = 1; i <= Math.abs(n); i++) {
      if (n % i === 0) {
        divisors.unshift(-i);
      }
    }
  }
  return divisors;
}

// test cases
console.log(divisor(0)); // 0 has infinite divisors
console.log(divisor(1)); // [1]
console.log(divisor(2)); // [1, 2]
console.log(divisor(10)); // [1, 2, 5, 10]
console.log(divisor(-10)); // [-1, -2, -5, -10]
console.log(divisor(50)); // [1, 2, 5, 10, 25, 50]
console.log(divisor(100)); // [1, 2, 4, 5, 10, 20, 25, 50, 100]
