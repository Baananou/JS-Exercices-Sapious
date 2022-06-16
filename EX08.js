const Input = [6, 0, 8, 2, 3, 0, 4, 0, 1]
function zeros(Arr) { // create function that takes the array as a parameter 
    let nZ = 0
    for (let i = 0; i < Arr.length; i++) {

        if (Arr[i] == 0) {
            nZ += 1
            Arr.splice(i, 1)
        }
    }
    for (let i = 0; i < nZ; i++) {
        let x = 0
        Arr.push(x);
    }
    console.log(Arr)
}
zeros(Input)