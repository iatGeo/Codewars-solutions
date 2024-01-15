// Odd-Even String Sort
// Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)
// Note: 
// 0 is considered to be an even index. 
// All input strings are valid with no spaces


//My solution
function sortMyString(S) {
    let even = []; let odd = []
    S.split('').forEach( (elem,index) => index%2==0 ? even.push(elem) : odd.push(elem) )
    return `${even.join('')} ${odd.join('')}`
}