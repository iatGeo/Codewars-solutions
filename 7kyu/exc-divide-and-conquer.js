// Divide and Conquer
// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.
// Return as a number.


//My solution
function divCon(x){
    return x.reduce( (a,b) => typeof b === 'number' ? a+b : a - +b, 0)
}