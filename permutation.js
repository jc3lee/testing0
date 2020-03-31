//Studying string permutation and Heap's algorithm.

//Wiki permutation
//https://www.wikiwand.com/en/Heap%27s_algorithm#/Details_of_the_algorithm
//adapted to js
function wikiPermut(str) {
    // Split the string into an array of characters.
    let arr = [...str];
    let finalArr = [];
    let tmp;
    let totalExtraSwaps = 0;

    // Function to swap variables' content.
    function swap(index1, index2) {
        if (index1 === index2) {
            //useless extra swap
            totalExtraSwaps++;
        }
        tmp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = tmp;
    }

    //permutation operation
    const generate2 = (n) => {
        if (n === 1) return finalArr.push(arr.join(""))
        generate2(n - 1)
        for (let i = 0; i < n - 1; i++) {
            swap(n % 2 ? 0 : i, n - 1);
            generate2(n - 1)
        }
    }

    generate2(arr.length);
    console.log("Wiki version of permutation\nFinal array", finalArr, "\nExtra swaps:", totalExtraSwaps);
}

//FreeCodeCamp permutation
function fccPermut(str) {
    // Split the string into an array of characters.
    let arr = [...str];
    let finalArr = [];
    let tmp;
    let totalExtraSwaps = 0;

    // Function to swap variables' content.
    function swap(index1, index2) {
        if (index1 === index2) {
            //useless extra swap
            totalExtraSwaps++;
        }
        tmp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = tmp;
    }

    //freecodecamp version
    const generate = (n) => {
        if (n === 1) finalArr.push(arr.join(""));
        else {
            for (let i = 0; i < n; i++) {
                generate(n - 1);
                swap(n % 2 ? 0 : i, n - 1);
                //useless swap when i = 1 and n = 1
            }
        }

        /*
        Trying to unravel the operations in freecodecamp's permutation version

        arr=[1, 2, 3] arr.length = 3
        g(3)
        n(=3) != 1
        for(i = 0)
            g(n(=2)) =>
                for(i = 0) 
                    g(n(=1)) => push arr [1, 2, 3]
                    swap false => swap(i(=0), n(=1)) => arr [2, 1, 3]
                for(i = 1)
                    g(n(=1)) => push arr [2, 1, 3]
                    swap false => swap(i(=1), 1) => arr [2, 1, 3]
            swap true => swap(0, n(=2)) => arr [3, 1, 2]
        for(i = 1)
            g(n(=2)) =>
                for(i = 0) 
                    g(n(=1)) => push arr [3, 1, 2]
                    swap false => swap(i(=0), n(=1)) => arr [1, 3, 2]
                for(i = 1)
                    g(n(=1)) => push arr [1, 3, 2]
                    swap false => swap(i(=1), n(=1)) => arr [1, 3, 2]
            swap true => swap(0, n(=2)) => arr [2, 3, 1]
        for(i = 2)
            g(n(=2)) =>
                for(i = 0) 
                    g(n(=1)) => push arr [2, 3, 1]
                    swap false => swap(i(=0), n(=1)) => arr [3, 2, 1]
                for(i = 1)
                    g(n(=1)) => push arr [3, 2, 1]
                    swap false => swap(i(=1), n(=1)) => arr [3, 2, 1]
            swap true => swap(0, n(=2)) => arr [1, 2, 3]
        */
    }

    generate(arr.length);
    console.log("\nFreeCodeCamp version of permutation\nFinal array", finalArr, "\nExtra swaps:", totalExtraSwaps);
}

wikiPermut("1234");
fccPermut("1234");

//wiki version no extra swaps  
//Trying to figure out the logic behind the nb of extra steps in fcc version just to satisfy my curiosity.
//array length: 1, 2, 3, 4, 5, 6
//extra steps:  0, 1, 3, 13, 65, 391
//extra steps for a string with string length of n =>
//n * extra steps for a string length of n - 1 + 1 if(n is an odd nb)

//2 * 0 + 1 = 1
//3 * 1 + 0 = 3
//4 * 3 + 1 = 13
//5 * 13 + 0 = 65
//6 *65 + 1 = 391

//For those learning Heap's algorithm in js => https://www.youtube.com/watch?v=xghJNlMibX4
