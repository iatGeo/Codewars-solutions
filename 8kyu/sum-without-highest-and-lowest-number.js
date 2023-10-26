// Sum without highest and lowest number
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation. If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.


//My solution
function sumArray(array) {
    if(array == null || array.length < 2 ){
      return 0
    }else{
      let sum = array.reduce( (a,b) => a+b, 0 )
      sum -= ( Math.min(...array) + Math.max(...array) )
      return sum
    }
}