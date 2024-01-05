// Row Weights
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
// Notes
// Array size is at least 1.


//My solution
function rowWeights(array){
    const team1 = array.filter( (elem,index) => index%2===0).reduce( (a,b) => a+b, 0)
    const team2 = array.filter( (elem,index) => index%2!==0).reduce( (a,b) => a+b, 0)
    return [team1, team2]
}