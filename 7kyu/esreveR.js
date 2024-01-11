// esreveR
// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)
// (the dedicated builtin(s) functionalities are deactivated)


//My solution
function reverse(array){
    let arrRev = []
    for(let i=array.length-1; i>=0; i--){
      arrRev.push(array[i])
    }
    return arrRev
}