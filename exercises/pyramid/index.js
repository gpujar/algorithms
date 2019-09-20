// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, stair = '') {
    const midPoint = Math.floor((2 * n - 1)/ 2);
    if(n === row){
        return;
    }
    if( stair.length === (2 * n - 1)){
        console.log(stair);
        return pyramid(n, row + 1);
    }
    if(midPoint - row <= stair.length && midPoint + row >= stair.length){
        stair += "#";
    }else{
        stair += " ";
    }
    pyramid(n, row, stair);

}

// function pyramid(n) {
//     const midPoint = Math.floor((2 * n - 1)/ 2);
//     for(let row = 0; row < n; row++){
//         let stair = '';
//         for(let column = 0; column < 2 * n - 1; column++){
//             if(midPoint - row <= column && midPoint + row >= column){
//                 stair+="#";
//             }else {
//                 stair+=" ";
//             }
//         }
//         console.log(stair);
//     }
// }

pyramid(4);
module.exports = pyramid;
