// Product Array (Array Series #5)
// Task
// Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].
// Notes
// Array/list size is at least 2 .
// Array/list's numbers Will be only Positives
// Repetition of numbers in the array/list could occur.


//My solution
function productArray(numbers) {
    return numbers.map(x => numbers.reduce((a,b) => a * b) / x)
}