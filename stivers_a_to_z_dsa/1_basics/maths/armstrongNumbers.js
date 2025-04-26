function armstrongNumbers(n) {
    if (n < 0) return false;
    if (n === 0) return true;

    let sum = 0;
    let num = n;
    let k = String(n).length;

    while (num > 0) {
        let digit = num % 10;
        sum += Math.pow(digit, k);
        num = Math.floor(num / 10);
    }

    return sum === n;
}

// Test cases
console.log(153, armstrongNumbers(153)); // true
console.log(370, armstrongNumbers(370)); // true
console.log(371, armstrongNumbers(371)); // true
console.log(9474, armstrongNumbers(9474)); // true
console.log(1234, armstrongNumbers(1234)); // false
console.log(0, armstrongNumbers(0)); // true
console.log(-1, armstrongNumbers(-1)); // false