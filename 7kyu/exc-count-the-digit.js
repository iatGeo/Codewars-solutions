// Count the Digit
// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.
// Square all numbers k (0 <= k <= n) between 0 and n.
// Count the numbers of digits d used in the writing of all the k**2.
// Implement the function taking n and d as parameters and returning this count.
// Note that 121 has twice the digit 1.


//My solution
function nbDig(n, d) {
    let result = 0
    let count = 0
    let arr = []
    
    while(count <= n){
      arr.push(count*count)
      count++
    }
    arr = arr.map(elem => String(elem))
    let test = arr.reduce((a,b)=>a+b).split('').sort()
    for(let i=0; i<test.length; i++){
      if( test[i] == String(d) ){ result += 1 }
    }
    return result
}