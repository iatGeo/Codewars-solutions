// Binary Addition
// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
// The binary number returned should be a string.
// Examples:(Input1, Input2 --> Output (explanation)))


//My solution
function addBinary(a,b) {
    const sum = a + b
    return sum.toString(2)
}