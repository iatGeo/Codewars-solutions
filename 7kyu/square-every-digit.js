//Square Every Digit
// In this kata, you are asked to square every digit of a number and concatenate them.
// Note: The function accepts an integer and returns an integer.


//My solution
function squareDigits(num){
    return Number(String(num).split('').map( elem => Math.pow(elem,2) ).join(''));
}