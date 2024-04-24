// Find all occurrences of an element in an array
// DESCRIPTION:
// Given an array (a list in Python) of integers and an integer n, find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.
// If n is not in the given array, return an empty array [].
// Assume that n and all values in the given array will always be integers.
// Example:
// findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]

//My solution
const findAll = (array, n) => {
   let results = [];
   for (let i = 0; i < array.length; i++) {
      if (array[i] === n) {
         results.push(i);
      }
   }
   return results;
};
