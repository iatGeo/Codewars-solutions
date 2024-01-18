// Fundamentals: Return
// Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.
// Please use the following function names:
// addition = add
// multiply = multiply
// division = divide (both integer and float divisions are accepted)
// modulus = mod
// exponential = exponent
// subtraction = subt


//My solutions
function add(a,b){
    return a+b
}

function divide(a,b){
    return a/b
}

function multiply(a,b){
    return a*b
}

function mod(a,b){
    return a%b
}
   
function exponent(a,b){
    return Math.pow(a,b)
}
    
function subt(a,b){
    return a-b
}

//refactored into
const add = (a,b) => a+b
const divide = (a,b) => a/b
const multiply = (a,b) => a*b
const mod = (a,b) => a%b
const exponent = (a,b) => Math.pow(a,b)
const subt = (a,b) => a-b