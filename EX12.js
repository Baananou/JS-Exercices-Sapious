const l1 = [2, 4, 3]
const l2 = [5, 6, 4]

function SUM(Arr1, Arr2) {
    let A1 = 0
    let A2 = 0
    let S = 0
    let SUM = []

    for (let i = 0; i < Arr1.length; i++) {
        A1 += Arr1[i] * Math.pow(10, i)
    }
    for (let j = 0; j < Arr2.length; j++) {
        A2 += Arr2[j] * Math.pow(10, j)
    }
    S = A1 + A2
    console.log(A1)
    console.log(A2)
    // console.log(S)
    SUM = String(S).split("").map((S) => {
        return Number(S)
    })
    console.log(SUM.reverse())
}

SUM(l1, l2)