//Count the divisors of a number


//My solution
function getDivisorsCnt(n){
    let score = 0
    for(let i=1; i<=n; i++){
      if( n%i == 0 ){
        score += 1
      }else{
        score += 0
      }
    }
    return score
}