// Tail Swap
// DESCRIPTION:
// You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.
// Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.
// Examples
// ["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
// ["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]

//My solution
function tailSwap(arr) {
   const firstVal = arr[0].split(":")[1];
   const secondVal = arr[1].split(":")[1];
   return arr.map((str, index) => {
      let tempArr = str.split(":");
      if (index === 0) {
         tempArr[1] = secondVal;
         return tempArr.join(":");
      } else {
         tempArr[1] = firstVal;
         return tempArr.join(":");
      }
   });
   return arr;
}
