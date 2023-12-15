// All Star Code Challenge #18
// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.


//My solution
function strCount(str, letter){  
    return !str.match(letter) ? 0 : 
        str.toLowerCase().split('').filter( elem => elem==letter).length
}