//***********************Testing sort****************************

//https://medium.com/javascript-in-plain-english/javascript-merge-sort-3205891ac060
//https://khan4019.github.io/front-end-Interview-Questions/sort.html#insertionSort
//https://humanwhocodes.com/blog/2012/11/27/computer-science-in-javascript-quicksort/
//https://hackernoon.com/elementary-sorting-algorithm-in-javascript-izd1y30x2  <= has a few code mistakes

const testArr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]

//BUBBLE SORT +++++++++++++++++++++++++++++++++++++++

function bubbleSort(arr) {
    const n = arr.length;
    // Iteration of array till last before element 
    for (let i = 0; i < (n - 1); i++) {
        // Iteration of array till last before element 
        for (j = 0; j < (n - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

//console.log(bubbleSort(testArr));

//INSERTION SORT +++++++++++++++++++++++++++++++++++++++

function insertionSort(arr) {
    const n = arr.length;
    // Iteration of array till last element 
    for (i = 1; i < n; i++) {
        let j = i;
        // Iterate over the sorted part of array and insert the element
        while (j > 0 && arr[j] < arr[j - 1]) {
            // Swap elements
            let temp = arr[j];
            arr[j] = arr[j - 1]
            arr[j - 1] = temp;
            j--;
        }
    }
    return arr;
}

//console.log(insertionSort(testArr));

//SELECTION SORT +++++++++++++++++++++++++++++++++++++++

function selectionSort(arr) {
    const n = arr.length;
    // Iteration of array till last element 
    for (let i = 0; i < n; i++) {
        let leastElementIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            // Check for least element and override least element index
            if (arr[j] < arr[leastElementIndex]) {
                leastElementIndex = j;
            }
        }
        // Swap elements
        let temp = arr[i];
        arr[i] = arr[leastElementIndex];
        arr[leastElementIndex] = temp;
    }
    return arr;
}

//console.log(selectionSort(testArr));

//MERGE SORT +++++++++++++++++++++++++++++++++++++++

function mergeSort(arr) {
    let len = arr.length;
    if (len < 2) return arr;
    let mid = Math.floor(len / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid);
    //send left and right to the mergeSort (=> recursion) to divide again
    //then merge the divided part
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [], l = 0, r = 0, lLen = left.length, rLen = right.length;
    while (l < lLen && r < rLen) {
        if (left[l] < right[r]) {
            result[result.length] = left[l];
            l++;
        } else {
            result[result.length] = right[r];
            r++;
        }
    }
    //remaining part needs to be added to the result
    return result.concat(left.slice(l)).concat(right.slice(r));
}

//console.log(mergeSort(testArr));

//QUICK SORT +++++++++++++++++++++++++++++++++++++++

function partition(arr, left, right) {
    var pivotValue = arr[Math.floor((right + left) / 2)],
        left = left,
        right = right;

    while (left <= right) {
        while (arr[left] < pivotValue) left++
        while (arr[right] > pivotValue) right--
        if (left <= right) {
            swap(arr, left, right);
            left++;
            right--;
        }
    }
    // value of updated left is called partitionIndex in quickSort
    //It's called partitionIndex because it's used to delimit two (smaller) partitions to quickSort from: [left, partitionIndex] [partitionIndex, right]
    return left;
}

function swap(arr, firstIndex, secondIndex) {
    var tmp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = tmp;
}

function quickSort(arr, left, right) {
    var partitionIndex;
    //when divided until arr < 2 => return arr 
    if (arr.length > 1) {
        partitionIndex = partition(arr, left, right);
        if (left < partitionIndex - 1) {
            //recursion
            quickSort(arr, left, partitionIndex - 1);
        }
        if (partitionIndex < right) {
            //recursion
            quickSort(arr, partitionIndex, right);
        }
    }
    return arr;
}

//console.log(quickSort(testArr, 0, testArr.length - 1))
