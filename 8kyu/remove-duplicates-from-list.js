// Remove duplicates from list
// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.
// The order of the sequence has to stay the same.


//My solution
function distinct(a) {
    return Array.from(new Set(a))
}