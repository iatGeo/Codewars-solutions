// Duplicate Encoder
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.


//My solution
function duplicateEncode(word){
    let arr = word.toLowerCase().split('')
    return arr.map( elem => arr.indexOf(elem) == arr.lastIndexOf(elem) ? '(' : ')' ).join('')
}