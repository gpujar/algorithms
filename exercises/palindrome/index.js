// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(inputString) {
//     let reveredString = '';
//     for(character of inputString){
//         reveredString = character + reveredString;
//     }
//     return reveredString === inputString;
// }

// function palindrome(inputString) {
//    let reversedString = inputString.split('').reduce((reversedString, character) => {
//         return character + reversedString;
//     }, '');
//     return reversedString === inputString;
// }

// function palindrome(inputString) {
//    let reversedString = inputString.split('').reverse().join('');
//     return reversedString === inputString;
// }

function palindrome(inputString) {
   return inputString.split('').every((character, index) => {
       return character === inputString[inputString.length - index - 1];
   });
}
module.exports = palindrome;
