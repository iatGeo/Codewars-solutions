// Factorial
// Your task is to write function factorial.
// https://en.wikipedia.org/wiki/Factorial


//My solution
function factorial(n) {
    return n ? n * factorial(n-1) : 1
}