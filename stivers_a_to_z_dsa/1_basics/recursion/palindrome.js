// check the given string is palindrome or not
// two pointer method
function isPalindrome(str, res = str.split(""), x = 0, y = str.length - 1) {
    if(x >= y) return [str === res.join(""), str, res.join("")];
    [res[x], res[y]] = [res[y], res[x]];
    return isPalindrome(str, res, x += 1, y -= 1);
}

console.log(isPalindrome("nanan"));
console.log(isPalindrome("sharan"));
console.log(isPalindrome("txt"));
console.log(isPalindrome("exxe"));

// single pointer method
function isPalindrome1(str, res = str.split(''), i = 0) {
    if (i >= Math.floor(str.length / 2)) return [str === res.join(''), str, res.join('')];
    [res[str.length - i - 1], res[i]] = [res[i], res[str.length - i - 1]];
    return isPalindrome1(str, res, i += 1);
}

console.log(isPalindrome1("nanan"));
console.log(isPalindrome1("sharan"));
console.log(isPalindrome1("png"));
console.log(isPalindrome1("txt"));
console.log(isPalindrome1("exxe"));