// Most digits
// DESCRIPTION:
// Find the number with the most digits.
// If two numbers in the argument array have the same number of digits, return the first one in the array.

//My solution
function findLongest(array) {
   let copyArr = array
      .slice()
      .sort((a, b) => String(b).length - String(a).length)
      .filter((num, index, arr) => {
         const max = arr[0].length;
         return num.length === max;
      });
   if (copyArr.length < 2) {
      return copyArr[0];
   } else {
      copyArr.map((num) => array.indexOf(num)).sort((a, b) => a - b);
      return copyArr[0];
   }
}
