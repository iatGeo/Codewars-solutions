//Round up to the next multiple of 5
// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?


//My solution
function solution(string) {
    return string.replace( /([A-Z])/g, ' $1' )
}