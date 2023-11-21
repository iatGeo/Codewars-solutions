// Find the first non-consecutive number
// Your task is to find the first element of an array that is not consecutive.
// If the whole array is consecutive then return null
// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!


//My solution
function firstNonConsecutive (arr) {
    let result = arr.filter( (elem,index) => elem > arr[index-1] + 1 )
    return result.length !== 0 ? result[0] : null
}