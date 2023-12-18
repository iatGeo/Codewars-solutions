// Multiple of index
// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).


//My solution
function multipleOfIndex(array) {
    let results = array.filter( (elem,index) => elem%index===0)
    if(array[0]===0){
      results.unshift(0)
      return results
    }else{
      return results
    }
}