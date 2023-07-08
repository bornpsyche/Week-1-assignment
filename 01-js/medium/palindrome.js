/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  //str = str.toLowerCase();
  str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const n = str.length;
  for (let i = 0; i < n / 2; i++) {
    if (str.charAt(i) != str.charAt(n - 1 - i)) return false;
  }
  return true;
}

module.exports = isPalindrome;
