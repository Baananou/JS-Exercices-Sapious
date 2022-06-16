const input = [1, 2, 3, 4, 10, 11]

function SUM(arr) {
    let S = 0
    for (let i = 0; i < arr.length; i++) {
        S += arr[i]
    }
    console.log(S)
}

SUM(input)