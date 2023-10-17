//Counting Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.


//My solutions
function duplicateCount(text){
    return text.toLowerCase().split('').filter( function(elem,index,arr){
      return arr.indexOf(elem) !== index && arr.lastIndexOf(elem) == index
    }).length
}

function duplicateCount(text){
    let str =  text.toLowerCase().split('').sort().join('').match(/(.)\1+/g)
    if( str !== null ){
      return str.length
    }else{
      return 0
    }
}

function duplicateCount(text){
    let arr = text.toLowerCase().split('').sort()
    let newArr = new Array()
    for(let i=0; i<arr.length; i++){
      if( arr[i] == arr[i+1] && !newArr.includes(arr[i]) ){
        newArr.push(arr[i])
      }
    }
    return newArr.length
}