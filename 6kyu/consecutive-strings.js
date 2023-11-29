// Consecutive strings
// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).


//My solution
function longestConsec(strarr, k) {
    let result = ''
    for(let i=0; k>0 && i<=strarr.length-k; i++){
      let tempArr = strarr.slice(i, i+k)
      let tempStr = tempArr.join('')
      if(tempStr.length > result.length){
        result = tempStr
      }
    }
    return result
}