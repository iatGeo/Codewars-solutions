// The Poet And The Pendulum
// DESCRIPTION:
// Scenario
// the rhythm of beautiful musical notes is drawing a Pendulum
// Beautiful musical notes are the Numbers
// Task
// Given an array/list [] of n integers , Arrange them in a way similar to the to-and-fro movement of a Pendulum
// The Smallest element of the list of integers , must come in center position of array/list.
// The Higher than smallest , goes to the right .
// The Next higher number goes to the left of minimum number and So on , in a to-and-fro manner similar to that of a Pendulum.
// Notes
// Array/list size is at least 3 .
// In Even array size , The minimum element should be moved to (n-1)/2 index (considering that indexes start from 0)
// Repetition of numbers in the array/list could occur , So (duplications are included when Arranging).

//My solutions
function pendulum(values) {
   values.sort((a, b) => a - b);
   let result = [values.shift()];
   for (let i = 0; i < values.length; i++) {
      i % 2 === 0 ? result.push(values[i]) : result.unshift(values[i]);
   }
   return result;
}

//another one without using shift/unshift
function pendulum(values) {
   values.sort((a, b) => a - b);
   const middle = [values[0]];
   let right = [];
   let left = [];
   for (let i = 1; i < values.length; i++) {
      i % 2 !== 0 ? right.push(values[i]) : left.push(values[i]);
   }
   return left.reverse().concat(middle).concat(right);
}
