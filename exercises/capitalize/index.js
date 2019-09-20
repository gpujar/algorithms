// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


function capitalize(str) {
    let returnString = str[0].toUpperCase();
    for(let i = 1; i < str.length; i++){
        returnString = str[i - 1] == ' ' ? returnString + str[i].toUpperCase() : returnString + str[i];
    }
    return returnString;
}

// function capitalize(str) {
//     const array = [];
//     str.split(' ').forEach(word => {
//         array.push(word[0].toUpperCase() + word.slice(1));
//     });
//     return array.join(' ');
// }

module.exports = capitalize;
