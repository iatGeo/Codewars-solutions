// Minimum Steps (Array Series #6)
// DESCRIPTION:
// Task
// Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.
// Notes:
// List size is at least 3.
// All numbers will be positive.
// Numbers could occur more than once , (Duplications may exist).
// Threshold K will always be reachable.

//My solution
function minimumSteps(numbers, value) {
   const nums = numbers.slice().sort((a, b) => a - b);
   let count = 0;
   let sum = 0;
   for (let i = 0; sum < value; i++) {
      sum += nums[i];
      count += 1;
   }
   return count - 1;
}
