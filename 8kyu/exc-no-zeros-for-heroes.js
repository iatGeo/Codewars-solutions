// No zeros for heros
// Numbers ending with zeros are boring.
// They might be fun in your world, but not here.
// Get rid of them. Only the ending ones.
// Zero alone is fine, don't worry about it. Poor guy anyway


//My solution
function noBoringZeros(n) {
    let arr = String(n).split('')
    while( arr[arr.length-1] == '0' ){
      arr.pop()
    }
    return Number(arr.join(''))
}