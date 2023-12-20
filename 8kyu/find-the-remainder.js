// Find the Remainder
// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.
// Division by zero should return NaN.


//My solution
function remainder(n, m){
    if( n>m &&  m!=0 ){
      return n%m
    }else if( m>n && n!=0 ){
      return m%n
    }else if( m==n && m!=0 ){
      return 0
    }else{
      return NaN
    }
}