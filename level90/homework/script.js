function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
let sampleArray = [64, 34, 25, 12, 22, 11, 90];
let sortedArray = bubbleSort(sampleArray);
console.log("Sorted array:", sortedArray);
