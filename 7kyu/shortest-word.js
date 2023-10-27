// Shortest Word
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.


//My solutions
function findShort(s){
    let x = s.split(' ').map( elem => elem.length).sort( (a,b) => a-b )
    return x[0]
}
//refactored to
function findShort(s){
    return Math.min(... s.split(' ').map(elem=>elem.length) )
}