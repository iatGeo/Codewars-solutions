//Break camelCase
// Complete the solution so that the function will break up camel casing, using a space between words.


//My solution
function solution(string) {
    return string.replace( /([A-Z])/g, ' $1' )
}