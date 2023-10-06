//Exes and Ohs
//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.


//My solution
function xoChecker(str) {
    let x = str.toLowerCase().split('')
    let sum1 = 0
    let sum2 = 0
    x.forEach( el => el==="x" ? sum1 += 1 : null || el==="o" ? sum2 += 1 : null )
    return sum1==sum2
}