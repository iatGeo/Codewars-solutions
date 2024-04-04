// Tidy Number (Special Numbers Series #9)
// DESCRIPTION:
// Definition
// A Tidy number is a number whose digits are in non-decreasing order.
// Task
// Given a number, Find if it is Tidy or not .
// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// Number passed is always Positive .
// Return the result as a Boolean
// Input >> Output Examples
// tidyNumber (12) ==> return (true)
// Explanation:
// The number's digits { 1 , 2 } are in non-Decreasing Order (i.e) 1 <= 2 .
// tidyNumber (32) ==> return (false)
// Explanation:
// The Number's Digits { 3, 2} are not in non-Decreasing Order (i.e) 3 > 2 .

//My solution
const tidyNumber = (n) => {
   let s = n.toString();
   for (let i = 0; i < s.length - 1; i++) {
      if (s[i] > s[i + 1]) return false;
   }
   return true;
};
