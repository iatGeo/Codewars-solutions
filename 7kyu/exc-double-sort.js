// Double Sort
// DESCRIPTION:
// Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.
// Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.
// Note that numbers written as strings are strings and must be sorted with the other strings.

//My solution
function dbSort(a) {
   let nums = a.filter((elem) => typeof elem === "number");
   if (nums.length > 1) nums = nums.sort((a, b) => a - b);
   let words = a.filter((elem) => typeof elem === "string");
   if (words.length > 1) words = words.sort();
   return nums.concat(words);
}
