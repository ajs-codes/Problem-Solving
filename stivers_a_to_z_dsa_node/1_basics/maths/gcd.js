
function gcd(a, b) {
    for(let i = Math.min(a, b); i >= 0; i--) {
        if (i === 0) {
            return Math.max(a, b);
        }
        if (a % i === 0 && b % i === 0) {
            return i;
        }
    }

    return 1;
}

console.log(gcd(12, 15));
console.log(gcd(20, 40));
console.log(gcd(100, 25));
console.log(gcd(100, 0));




