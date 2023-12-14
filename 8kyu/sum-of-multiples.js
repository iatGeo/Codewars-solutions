// Sum of Multiples
// Find the sum of all multiples of n below m
// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples


//My solution
function sumMul(n,m){
    if(m<=n) return 'INVALID'
    
    let nums = []
    for(let i=n; i<m; i+=n){
      nums.push(i)
    }
    return nums.reduce( (a,b) => a+b, 0)
}