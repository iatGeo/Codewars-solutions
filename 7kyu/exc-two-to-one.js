// Two to One
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.


//My solutions
function longest(s1, s2) {
    let arr = new Array()
    s1.split('').forEach( elem => arr.includes(elem) ? null : arr.push(elem))
    s2.split('').forEach( elem => arr.includes(elem) ? null : arr.push(elem))
    return arr.sort().join('')
}
//The better answer using Set constructor
function longest(s1, s2) {
    return Array.from(new Set(s1+s2)).sort().join('')
}