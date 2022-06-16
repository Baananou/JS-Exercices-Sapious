const N = 8 // declare N
let output = '' // declare output

for (let i = 1; i <= N; i++) { //Go through N lines
    for (let j = N - 1; j >= i; j--) { // Make N-1 spaces in the start of the line
        output += ' '
    }
    for (let D = 1; D <= i; D++) { // Add N # in the same line
        output += '#'
    }
    output += '\n' // Make a new line 
}

console.log(output) 