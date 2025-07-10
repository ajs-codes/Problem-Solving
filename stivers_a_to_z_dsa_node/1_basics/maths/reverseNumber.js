
function reverseNumber(x) {
    num = (x > 0) ? x : -x;
    let rev = 0;
    while (num > 0) {
        rev = rev * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return (x >= 0) ? rev : -rev;
}

console.log(reverseNumber(123)); // 321
console.log(reverseNumber(-123)); // -321
console.log(reverseNumber(120)); // 21
console.log(reverseNumber(0)); // 0