// parameterized method

function fact0(num, res = 1) {
    return (num <= 0) ? res : fact0(num - 1, res *= num);
}

console.log(fact0(2)) // 2
console.log(fact0(10)) // 3628800
console.log(fact0(15)) // 1307674368000

// functional method

function fact1(num) {
    return (num <= 0) ? 1 : num * fact1(num - 1);
}

console.log(fact1(0)) // 1
console.log(fact1(2)) // 2
console.log(fact1(10)) // 3628800
console.log(fact1(15)) // 1307674368000