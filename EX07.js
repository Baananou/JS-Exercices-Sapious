const nums = [7, 3, 5, 4, 6, 5]; // declare input 
const target = 10

function pair(Arr, tar) { // create function that takes the array as a parameter 
    let output = ""
    for (let i = 0; i < Arr.length; i++) { // first loop

        for (let j = i + 1; j < Arr.length; j++) { // second loop ahead of the first one
            // console.log((Arr[i] + Arr[j]) == tar);
            if ((Arr[i] + Arr[j]) == tar) { // compaire array elements
                output += ("\n Pair found (" + Arr[i] + "," + Arr[j] + ")"); // print duplicated element
            }
        }
    }

    if (output == "") {
        output += ("Pair not found")
    }
    console.log(output)
}
pair(nums, target); // call function
