// Average Scores
// DESCRIPTION:
// Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).
// The array will never be empty.

//My solution
function average(scores) {
   const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
   return Math.ceil(avg) - avg < 0.5 ? Math.ceil(avg) : Math.floor(avg);
}
