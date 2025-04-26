// parameterized method
function reverseArray(arr, start = 0, end = arr.length - 1) {
  if (start >= end) return arr;
  [arr[start], arr[end]] = [arr[end], arr[start]];
  return reverseArray(arr, (start += 1), (end -= 1));
}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray([2, 45, 32, 0, 1, 10]));

// using single pointer
function reverseArr(arr, i = 0) {
  if (i >= Math.floor(arr.length / 2)) return arr;
  [arr[arr.length - i - 1], arr[i]] = [arr[i], arr[arr.length - i - 1]];
  return reverseArr(arr, (i += 1));
}

console.log(reverseArr([1, 2, 3, 4, 5]));
console.log(reverseArr([2, 45, 32, 0, 1, 10]));
