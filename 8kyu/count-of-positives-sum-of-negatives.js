// Count of positives / sum of negatives
// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.


//My solution
function countPositivesSumNegatives(input) {
    let count = 0
    let sum = 0
    if( input == null || input.length == 0 ){
      return []
    }else{
      for(let i=0; i<input.length; i++){
        input[i] > 0 ? count += 1 : input[i] < 0 ? sum += input[i] : null
      }
      return [count, sum]
    }
}