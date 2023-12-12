// Grasshopper - Array Mean
// Find the mean (average) of a list of numbers in an array.


//My solutions
var findAverage = function (nums) {
    return nums.reduce( (a,b) => a+b, 0) / nums.length
}

const findAverage = nums => nums.reduce( (a,b) => a+b, 0) / nums.length