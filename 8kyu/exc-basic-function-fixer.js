// Grasshopper - Basic Function Fixer
// I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.
// Can you help me fix the function?


//My solution
function firstNonConsecutive (arr) {
    let result = arr.filter( (elem,index) => elem > arr[index-1] + 1 )
    return result.length !== 0 ? result[0] : null
}