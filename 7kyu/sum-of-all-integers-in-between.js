// Beginner Series #3 Sum of Numbers
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!


//My solution
function getSum(a, b){
    if(a!==b){
      let arr = [a,b].sort( (a,b) => a-b )
      let newArr = new Array()
      for(let i=arr[0]; i<=arr[1]; i++){
        newArr.push(i)
      }
      return newArr.sort().reduce( (a,b) => a+b, 0)
    }else{
      return a
    }
}