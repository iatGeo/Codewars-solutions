// Sum a list but ignore any duplicates
// DESCRIPTION:
// Please write a function that sums a list, but ignores any duplicate items in the list.
// For instance, for the list [3, 4, 3, 6] , the function should return 10.

//My solution
function sumNoDuplicates(numList) {
   return numList
      .filter(
         (num, indx, array) => array.indexOf(num) === array.lastIndexOf(num)
      )
      .reduce((a, b) => a + b, 0);
}
