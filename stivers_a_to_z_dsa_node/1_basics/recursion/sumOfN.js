// parameterized recursion method

function sumOfN(num, sum = 0) {
    return (num <= 0) ? sum : sumOfN(num - 1, sum += num);
}


// testcases
console.log(sumOfN(3)) // 6
console.log(sumOfN(10)) // 55
console.log(sumOfN(100)) // 5050
console.log(sumOfN(1000)) // 500500

// functional recursion method

function sumOfN2(num) {
    return (num <= 0) ? null : num + sumOfN(num - 1);
}

// Testcases
console.log(sumOfN2(3)) // 6
console.log(sumOfN2(10)) // 55
console.log(sumOfN2(100)) // 5050
console.log(sumOfN2(1000)) // 500500