// String incrementer
// Your job is to write a function which increments a string, to create a new string.
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100
// Attention: If the number has leading zeros the amount of digits should be considered.


//My solution
function incrementString (strng) {
    let arr = strng.split('').map( elem => Number(elem))  
    if( arr.every( elem => isNaN(elem))){
      return strng + '1'
    }else{
      let count = 0
      let nums = []   
      while( !isNaN( arr[arr.length-1-count])){
        nums.push( arr[arr.length-1-count])
        count++
      }
      nums.reverse()
      
      if( nums.every( elem => elem === 9)){
        let finalNum = nums.map( elem => 0)
        finalNum.unshift(1)
        return strng.slice(0, -count) + finalNum.join('')
      }else{
        
        let finalCount = 0
        while( nums[nums.length-1-finalCount] === 9){
          nums[nums.length-1-finalCount] = 0
          finalCount++
        }
        nums[nums.length-1-finalCount] += 1
        return strng.slice(0, -count) + nums.join('')
      }
    }
}

//best comunity's solution
const incrementString = str => str.replace(/([0-8]|\d?9+)?$/, (e) => e ? + e + 1 : 1)