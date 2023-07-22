/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function removeSpacesAndPunctuations(str) {
  var nopunctuation = str.replace(/\W/g,"");
  var nospaces = nopunctuation.replace(/\s/g,"");
  var finalstring = nospaces;

  return finalstring;
}

function isPalindrome(str) {
  str = str.toLowerCase();
  let finalstring = removeSpacesAndPunctuations(str);

  let len = finalstring.length;
  for(let i=0; i<Math.floor(len/2); i++) {
    if (finalstring[i] !== finalstring[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
