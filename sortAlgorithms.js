//***********************Testing sort****************************

//https://medium.com/javascript-in-plain-english/javascript-merge-sort-3205891ac060
//https://khan4019.github.io/front-end-Interview-Questions/sort.html#insertionSort
//https://humanwhocodes.com/blog/2012/11/27/computer-science-in-javascript-quicksort/
//https://medium.com/javascript-algorithms/javascript-algorithms-bubble-sort-3d27f285c3b2

const testArr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]

//BUBBLE SORT +++++++++++++++++++++++++++++++++++++++
//compare the 1st element with the 2nd, swap the bigger one to 2nd place
//compare the 2nd element with the 3rd, swap the bigger one to 3rd place
//etc.
//when you have reached the end of the array, repeat all over
//by default nb of repetition = array length
//to increase efficiency, use a hasSwapped boolean to break the loop and return if nothing has been swapped

function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        //optional swapped tracker => less iterations => more efficient
        let hasSwapped = false;
        //full array swap iteration
        for (let j = 0; j < n - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                hasSwapped = true;
            }
        }
        console.log(arr);
        if (!hasSwapped) break;
    }
    return arr;
}

//console.log(bubbleSort(testArr));

//INSERTION SORT +++++++++++++++++++++++++++++++++++++++

function insertionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let j = i + 1;
        while (j > 0 && array[j] < array[j - 1]) {
            let tmp = array[j];
            array[j] = array[j - 1];
            array[j - 1] = tmp;
            j--;
        }
    }
    console.log(array)
    return array;
}
//console.log(insertionSort(testArr));

//SELECTION SORT +++++++++++++++++++++++++++++++++++++++
//easiest one to understand (for me at least)
//find the minValue and swap it with the 1st element
//find the minValue and swap it with the 2nd element 
//etc.
//when you have reached the end of the array, return 

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i; j < array.length; j++) {
            if (array[j] < array[minIndex]) minIndex = j;
        }
        let tmp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = tmp;
    }
    console.log(array);
    return array;
}

//console.log(selectionSort(testArr));

//MERGE SORT +++++++++++++++++++++++++++++++++++++++
//divide your array with recursion until all you have are arrays of one item
//compare each item of each pair of array and merge your way up
//better explanation at https://khan4019.github.io/front-end-Interview-Questions/sort.html#mergeSort


function mergeSort(arr) {
    let len = arr.length;
    if (len < 2) return arr;
    let mid = Math.floor(len / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [], l = 0, r = 0;
    while (l < left.length && r < right.length) {
        if (left[l] < right[r]) {
            result[result.length] = left[l];
            l++;
        } else {
            result[result.length] = right[r];
            r++;
        }
    }
    //add remaining parts
    return result.concat(left.slice(l)).concat(right.slice(r));
}

//console.log(mergeSort(testArr));

//QUICK SORT +++++++++++++++++++++++++++++++++++++++
//https://khan4019.github.io/front-end-Interview-Questions/sort.html#quickSort

function partition(arr, left, right) {
    //get the value of the pivot not the index because
    let pivotValue = arr[Math.floor((left + right) / 2)];

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
    //because it's used to delimit two (smaller) partitions: 
    //[left, partitionIndex - 1] [partitionIndex, right]
    return left;
}

function swap(arr, index1, index2) {
    let tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
}

function quickSort(arr, left, right) {
    let partitionIndex;
    if (arr.length > 1) {
        partitionIndex = partition(arr, left, right);
        if (left < partitionIndex - 1) {
            quickSort(arr, left, partitionIndex - 1);
        }
        if (partitionIndex < right) {
            quickSort(arr, partitionIndex, right);
        }
    }
    return arr;
}

//console.log(quickSort(testArr, 0, testArr.length - 1))
