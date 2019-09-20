// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
   // let inputChar = str.split('');
    let charCount = {};
    let max = 0;
    let maxChar = '';
    for (let character of str){
        if(!charCount[character]){
            charCount[character] = 1;
        }else{
            charCount[character] = charCount[character]++;
        }
    }
    console.log(charCount);
    for (let char in charCount){
        if(charCount[char] > max){
            max = charCount[char];
            maxChar = char;
        }
    }
    return maxChar;
}

module.exports = maxChar;
