// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse1(str) {
    let strToken = str.split('');
    let reverseString = [];
    for(let i = 0; i < strToken.length; i++){
        reverseString[i] = strToken[strToken.length -1 -i];
    }
    return reverseString.join('');
}
function reverse2(str) {
    return str.split('').reverse().join('');
}
function reverse3(str) {
    let reversed = '';
    for(character of str){
        reversed = character + reversed;
    }
    return reversed;
}
function reverse(str) {
    debugger;
    return str.split('').reduce((reversed, character) => {
        return character + reversed;
    }, '');
}
reverse('giri');
module.exports = reverse;
