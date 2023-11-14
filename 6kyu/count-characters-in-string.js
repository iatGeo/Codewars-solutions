// Count characters in your string
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.


//My solution
function count(string) {
    if(string.length == 0){
      return {}
    }else{
      let result = {}
      for(let char of string.split('')){
        result[char] ? result[char] += 1 : result[char] = 1
      }
      return result
    }
}