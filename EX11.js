const alice = [5, 6, 7]
const bob = [3, 6, 10]

function ptcheck(Arr1, Arr2) {
    let pt = 0
    let rate = 0
    for (let i = 0; i < Arr1.length; i++) {
        for (let j = 0; j < Arr2.length; j++) {
            if (Arr1[i] === Arr2[j]) {
                rate += 1
            }
        }
    }
    if (rate == 3) {
        output = ("[0,0]")
    }
    else if (rate < 3) {
        output = ("[1,1]")
    }
    console.log(output)
}

ptcheck(alice, bob)