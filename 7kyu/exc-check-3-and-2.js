// Check three and two
// DESCRIPTION:
// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.
// Examples
// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"

//My solution
function checkThreeAndTwo(array) {
   const as = array.filter((elem) => elem === "a").length;
   const bs = array.filter((elem) => elem === "b").length;
   const cs = array.filter((elem) => elem === "c").length;
   return (
      (as === 3 || bs === 3 || cs === 3) && (as === 2 || bs === 2 || cs === 2)
   );
}
