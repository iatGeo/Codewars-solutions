// Powers of i
// DESCRIPTION:
// i² = −1, therefore it is a solution to 𝑥² + 1 = x²+1=0.
// Your Task
// Complete the function pofi that returns 𝑖 to the power of a given non-negative integer in its simplest form, as a string (answer may contain 𝑖).

//My solution
function pofi(n) {
   switch (n % 4) {
      case 0:
         return "1";
      case 1:
         return "i";
      case 2:
         return "-1";
      case 3:
         return "-i";
   }
}
