const nums = [8, 4, 7, 3, 1, 0] // declare input array
const target = 4 // declare target

if (nums.indexOf(target) == -1) {
    output = ("The target does not exist in [" + nums + "]")
} else {
    output = ("The target found in index " + nums.indexOf(target))
}
console.log(output)