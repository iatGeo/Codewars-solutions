// Find Multiples of a Number
// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.


//My solution
function findMultiples(integer, limit) {
    let result = []
    let count = integer
    while(count <= limit){
      result.push(count)
      count += integer
    }
    return result
}