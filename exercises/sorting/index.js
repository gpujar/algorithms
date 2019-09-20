// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
 for(let i = 0; i < arr.length; i++){
     for(let j = 0; j < arr.length - i; j++){
         if(arr[j] > arr[j + 1]){
            let greater = arr[j];
             arr[j] = arr[j + 1];
             arr[j + 1] = greater;
         }
     }
 }
    return arr;
}

function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++){
        let minValueIndex = i; // assume first value as low value
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[minValueIndex]){
                minValueIndex = j;
            }
        }
        if(i !== minValueIndex){
            let minValue = arr[minValueIndex];
            arr[minValueIndex] = arr[i];
            arr[i] = minValue;
        }
    }
    return arr;
}

function mergeSort(arr) {
    if(arr.length === 1){
        return arr;
    }
    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const results = [];
    while(left.length && right.length){
        if(left[0] < right[0]){
            results.push(left.shift());
        }else{
            results.push(right.shift());
        }
    }
    return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
