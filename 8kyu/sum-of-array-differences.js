// Sum of differences in array
// Your task is to sum the differences between consecutive pairs in the array in descending order.
// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]
// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).


//My solution
function sumOfDifferences(arr){
    if(arr.length===0 || arr.length===1){
      return 0
    }else{
      arr.sort( (a,b) => b-a)
      let additives = []
      for(let i=0; i<arr.length-1; i++){
        additives.push( arr[i] - arr[i+1] )
      }
      return additives.reduce( (a,b) => a+b, 0)
    }
}