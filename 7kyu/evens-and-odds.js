// Evens and Odds
// DESCRIPTION:
// This kata is about converting numbers to their binary or hexadecimal representation:
// If a number is even, convert it to binary.
// If a number is odd, convert it to hex.
// Numbers will be positive. The hexadecimal string should be lowercased.

//My solution
function evensAndOdds(num) {
   return num % 2 === 0 ? (num >>> 0).toString(2) : num.toString(16);
}
