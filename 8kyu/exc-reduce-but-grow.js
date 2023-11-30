// Beginner - Reduce but Grow
// Given a non-empty array of integers, return the result of multiplying the values together in order.


//My solution
function grow(x){
    return x.reduce( (a,b) => a*b, 1 )
}