// Unique string characters
// DESCRIPTION:
// In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.
// For example:
// solve("xyab","xzca") = "ybzc" 
// --The first string has 'yb' which is not in the second string. 
// --The second string has 'zc' which is not in the first string. 
// Notice also that you return the characters from the first string concatenated with those from the second string.


//My solution
function solve(a,b){
    const uniques = (x,y) => x.split('').filter(elem => !y.includes(elem)).join('')
    return uniques(a,b).concat(uniques(b,a))
}