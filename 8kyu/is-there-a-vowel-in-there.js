// Is there a vowel in there?
// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
// If they are, change the array value to a string of that vowel.
// Return the resulting array.


//My solution
function isVow(a){
    const vowelCodes = [97, 101, 105, 111, 117]
    return a.map( num => vowelCodes.includes(num) ? String.fromCharCode(num) : num)
}