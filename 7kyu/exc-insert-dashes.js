// Insert dashes
// DESCRIPTION:
// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3.
// Note that the number will always be non-negative (>= 0).

//My solution
function insertDash(num) {
   return String(num)
      .split("")
      .map((elem, index, array) => {
         if (
            +elem % 2 !== 0 &&
            +array[index + 1] % 2 !== 0 &&
            array[index + 1]
         ) {
            return elem + "-";
         } else {
            return elem;
         }
      })
      .join("");
}
