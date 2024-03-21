// Simple string characters
// DESCRIPTION:
// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.
// Solve("*'&ABCDabcde12345") = [4,5,5,3].
// --the order is: uppercase letters, lowercase, numbers and special characters.

//My solution
function solve(s) {
   let upperS = 0;
   let lowerS = 0;
   let nums = 0;
   let specialChars = 0;
   s.split("").forEach((elem) => {
      if (/[A-Z]/.test(elem)) {
         upperS += 1;
      } else if (/[a-z]/.test(elem)) {
         lowerS += 1;
      } else if (/[0-9]/.test(elem)) {
         nums += 1;
      } else {
         specialChars += 1;
      }
   });
   return [upperS, lowerS, nums, specialChars];
}
