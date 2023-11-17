// Odd or Even?
// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).


//My solution
function oddOrEven(array) {
    return array == [] ? "even" : array.reduce((a,b) => a+b, 0) % 2 == 0 ? "even" : "odd"
}