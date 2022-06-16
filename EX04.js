const inArr = [1, 2, 3, 4, 2]; // declare input

function REP(Arr) { // create function that takes the array as a parameter 
    for (let i = 0; i < Arr.length; i++) { // first loop
        for (let j = i + 1; j < Arr.length; j++) { // second loop ahead of the first one
            if (Arr[i] === Arr[j]) { // compaire array elements
                console.log("The duplicate element is " + Arr[j]); // print duplicated element
            }
        }
    }
}

REP(inArr); // call function