/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  map = {};
  // for (const c of str1.toLowerCase()) {
  //   if (map[c]) map[c]++;
  //   else map[c] = 1;
  // }
  // for (const c of str2.toLowerCase()) {
  //   if (map[c]) map[c]--;
  //   else map[c] = 1;
  // }
  // for (const x in map) {
  //   if (map[x] !== 0) return false;
  // }
  // return true;
  // str1 = str1.toLowerCase();
  // str2 = str2.toLowerCase();

  if (str1.length !== str2.length) {
    return false;
  }

  var sortedStr1 = str1.split('').sort().join('');
  var sortedStr2 = str2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

module.exports = isAnagram;
