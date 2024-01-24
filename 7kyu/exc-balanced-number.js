// Balanced Number (Special Numbers Series #1 )
// A balanced number is a number where the sum of digits to the left of the middle digit(s) and the sum of digits to the right of the middle digit(s) are equal.
// If the number has an odd number of digits, then there is only one middle digit. (For example, 92645 has one middle digit, 6.) Otherwise, there are two middle digits. (For example, the middle digits of 1301 are 3 and 0.)
// The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g. 413023 is a balanced number because the left sum and right sum are both 5.
// The task
// Given a number, find if it is balanced, and return the string "Balanced" or "Not Balanced" accordingly. The passed number will always be positive.


//My solutions
function balancedNum(number){
    let x = String(number), right, left
    if( x.length%2===0 ){
      left = x.split('').slice(0, x.length/2 -1).map( num => +num).reduce( (a,b) => a+b, 0)
      right = x.split('').slice(x.length/2 +1).map( num => +num).reduce( (a,b) => a+b, 0)
    }else{
      left = x.split('').slice(0, Math.floor(x.length/2)).map( num => +num).reduce( (a,b) => a+b, 0)
      right = x.split('').slice(Math.ceil(x.length/2)).map( num => +num).reduce( (a,b) => a+b, 0)
    }
    return right===left ? "Balanced" : "Not Balanced"
}

//refactored into:
function balancedNum(number){
    let x = String(number)
    let y = (x.length - (x.length%2 ? -1 : -2)) / 2 //if something%2==0, zero can be used as 'false'
    const left = x.split('').slice(0, y).map( num => +num).reduce( (a,b) => a+b, 0)
    const right = x.split('').slice(-y).map( num => +num).reduce( (a,b) => a+b, 0)
    return left===right ? "Balanced" : "Not Balanced"
  }