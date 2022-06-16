const n = 2
const input = [1, 2, 3, 4, 5]

function RL(arr, n) {
    for (let i = 0; i < n; i++) {
        let first = arr.shift(); // Stock the first element of the array and delete it
        arr.push(first);// add the first element to the end of array 
    }
    console.log(arr)
}

RL(input, n)