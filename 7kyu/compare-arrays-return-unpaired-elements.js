// noobCode 04: HOT SINGLES...compare two arrays, return the unpaired items
// Write a function that takes two array arguments, and returns a new array populated with the elements that appear in either array, but not in both. Elements should only appear once in the returned array.
// The order of the elements in the result should follow what appears in the first array, then the second one.


//My solutions
function hotSingles(arr1, arr2) {
    let newArr = new Array()
  
    arr1.forEach( elem => !newArr.includes(elem) ? newArr.push(elem) : null )
  
    let arr2Uniq = Array.from(new Set(arr2))
  
    arr2Uniq.forEach( elem => {
      if( newArr.includes(elem) ){
        newArr.splice( newArr.indexOf(elem), 1 )
      }else{
        newArr.push(elem)
      }
    })
    return newArr
}

//refactored into
function hotSingles(arr1, arr2) {
    let newArr = new Array()
  
    arr1.forEach( elem => !newArr.includes(elem) ? newArr.push(elem) : null )
  
    let arr2Uniq = Array.from(new Set(arr2))
    arr2Uniq.forEach( elem => newArr.includes(elem) ? newArr.splice( newArr.indexOf(elem), 1 ) : newArr.push(elem) )
  
    return newArr
}

function hotSingles(arr1, arr2) {
    let newArr = new Array()
  
    arr1.forEach( elem => !newArr.includes(elem) ? newArr.push(elem) : null )
  
    let arr2Uniq = new Array()
    arr2.forEach( elem => !arr2Uniq.includes(elem) ? arr2Uniq.push(elem) : null )
    arr2Uniq.forEach( elem => newArr.includes(elem) ? newArr.splice( newArr.indexOf(elem), 1 ) : newArr.push(elem) )
  
    return newArr
}