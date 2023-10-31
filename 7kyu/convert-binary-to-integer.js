// Ones and Zeros
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
// However, the arrays can have varying lengths, not just limited to 4.


//My solution
const binaryArrayToNumber = arr => {
    const str = arr.join('')
    return parseInt(str, 2)
}