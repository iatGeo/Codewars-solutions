// Is Integer Array?
// DESCRIPTION:
// Write a function with the signature shown below:
// function isIntArray(arr) {
//   return true
// }
// returns true  / True if every element in an array is an integer or a float with no decimals.
// returns true  / True if array is empty.
// returns false / False for every other input.

//My solution
function isIntArray(arr) {
   if (!Array.isArray(arr)) return false;
   for (let i = 0; i < arr.length; i++) {
      if (!Number.isInteger(arr[i])) return false;
   }
   return true;
}
