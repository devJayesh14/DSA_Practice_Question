function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        let n = arr.length;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        if (min != i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

let array = [5, 4, 81, 1, 2];
console.log("Final Array", selectionSort(array));