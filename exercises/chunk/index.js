// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const chunked = [];
    let index = 0;
    while(index < array.length){
        chunked.push(array.slice(index, index + size));
        index += size;
    }
    return chunked;
}

// function chunk(array, size) {
//     let chunked = [];
//     for(let element of array){
//         let last = chunked[chunked.length - 1];
//         console.log("last ::",last);
//         if(!last || last.length === size){
//             console.log("before last ::",[element]);
//             chunked.push([element]);
//             console.log("after last ::",chunked);
//         }else{
//             last.push(element);
//             console.log("after push in else last ::",last);
//         }
//     }
//     return chunked;
// }
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

chunk(arr, 4);

module.exports = chunk;
