// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

// function vowels(str) {
//     const vovels = ['a', 'e', 'i', 'o', 'u'];
//     let vovelCount = 0;
//     for(character of str.toLowerCase()){
//         if(vovels.includes(character))
//             vovelCount++;
//     }
//     return vovelCount;
// }

// function vowels(str) {
//     let strArray = str.toLowerCase().split('');
//     const vowels = {"a": 0, "e": 0, "i": 0, "o": 0, "u": 0};
//     let vowelCount = 0;
//     for(let i = 0; i < strArray.length; i++){
//         const char = strArray[i];
//         if(vowels[char] === 0)
//             vowelCount++;
//     }
//     return vowelCount;
// }

module.exports = vowels;
