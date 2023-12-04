// Alternate capitalization
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
// The input will be a lowercase string with no spaces.


//My solution
function capitalize(s){
    let result = []
    result[0] = s.split('')
        .map( (elem,index) => index%2===0 ? elem.toUpperCase() : elem).join('')
    result[1] = s.split('')
        .map( (elem,index) => index%2!==0 ? elem.toUpperCase() : elem).join('')
    return result
}