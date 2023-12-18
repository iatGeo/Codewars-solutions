// Sum of the first nth term of Series
// Your task is to write a function which returns the sum of following series upto nth term(parameter).
// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.
// If the given value is 0 then it should return 0.00
// You will only be given Natural Numbers as arguments.


//My solution
function SeriesSum(n){
    if(n>0){
      let count = 1
      let x = 4
      for(let i=1; i<n; i++){
        count += 1/(x)
        x += 3
      }
      return count.toFixed(2)
    }else{
      return '0.00'
    }
}