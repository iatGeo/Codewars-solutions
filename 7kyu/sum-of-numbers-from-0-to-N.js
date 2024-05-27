// Sum of numbers from 0 to N
// DESCRIPTION:
// Description:
// We want to generate a function that computes the series starting from 0 and ending until the given number.
// Example:
// Input:
// > 6
// Output:
// 0+1+2+3+4+5+6 = 21
// Input:
// > -15
// Output:
// -15<0
// Input:
// > 0
// Output:
// 0=0

//My solution
var SequenceSum = (function () {
   function SequenceSum() {}

   SequenceSum.showSequence = function (count) {
      if (count < 0) {
         return `${arguments[0]}<0`;
      } else if (count == 0) {
         return `0=0`;
      } else {
         let numsArr = [];
         for (let i = 0; i <= count; i++) {
            numsArr.push(i);
         }
         const result = numsArr.reduce((a, b) => a + b, 0);
         return `${numsArr.join("+")} = ${result}`;
      }
   };

   return SequenceSum;
})();
