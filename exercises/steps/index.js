// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
   console.log(' n :: '+n+' row :: '+row+' stair :: '+stair);
   if(n === row){
       return;
   }
    if(stair.length === n){
        console.log(stair);
        return steps(n , row + 1, '');
    }
    if(stair.length <= row){
        stair = stair + '#';
    }else{
        stair = stair + " ";
    }
   console.log('stair :: ',stair);
    steps(n, row, stair);
}

steps(4);
// function steps(n) {
//     for(let row = 0; row < n; row++){
//         let stair = '';
//         for(let column = 0; column < n; column++){
//             stair = row >= column ? stair + "#": stair + " ";
//         }
//         console.log(stair);
//     }
// }

// function steps(n) {
//     for(let i=1; i <= n; i++){
//         let output = '#'.repeat(i)
//         console.log(output+" ".repeat(n - i));
//     }
// }

module.exports = steps;
