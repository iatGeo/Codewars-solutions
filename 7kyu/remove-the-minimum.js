// Remove the minimum
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
// Don't change the order of the elements that are left.


//My solutions
function removeSmallest(numbers) {
    let arr = [...numbers]
    
    //find smallest number value
    let minVal = Math.min(...arr)
    
    
    //check if it has unique index & remove element
    if( arr.indexOf(minVal) == arr.lastIndexOf(minVal) ){
      arr.splice(arr.indexOf(minVal), 1)
      return arr
    }else{
      for(let i=0; i<=arr.length; i++){
        if( arr[i]==minVal && i != arr.lastIndexOf(minVal) ){
          arr.splice(i,1)
        }
      }
      return arr
    }
}

//refactored into
function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}