// Reversed sequence
// Build a function that returns an array of integers from n to 1 where n>0


//My solution
const reverseSeq = n => {
    let nArr = new Array()
    while(n>0){
      nArr.push(n)
      n--
    }
    return nArr
}