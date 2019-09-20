// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    if(n < 2){
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

function memoize(fn){
    const cache = {};
    return function (...args) {
        if(cache[args]){
            return cache[args];
        }
        const result = fn.apply(this, args);
        cache[args] = result;
        return result;
    }
}

fib = memoize(fib);
// function fib(n) {
//     let fabSeries = [0, 1];
//     for(let i = 2; i <= n; i++){
//         const prevNumber = fabSeries[i - 2];
//         const currentNumber = fabSeries[i - 1];
//         //fabSeries[i] = prevNumber + currentNumber;
//         fabSeries.push(prevNumber + currentNumber);
//     }
//     return fabSeries[n];
// }

// function fib(n) {
//     let prevNumber = 0;
//     let curreNumber = 1;
//     let nthNumber = n === 1 ? 1 : 0;
//     for(let i = 2; i <= n; i++){
//         nthNumber = prevNumber + curreNumber;
//         prevNumber = curreNumber;
//         curreNumber = nthNumber;
//     }
//     return nthNumber;
// }

module.exports = fib;
