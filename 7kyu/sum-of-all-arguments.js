// Sum of all arguments
// DESCRIPTION:
// Write a function that finds the sum of all its arguments.
// eg:
// sum(1, 2, 3) // => 6
// sum(8, 2) // => 10
// sum(1, 2, 3, 4, 5) // => 15

function sum() {
   let total = 0;
   for (var i in arguments) {
      total += arguments[i];
   }
   return total;
}
