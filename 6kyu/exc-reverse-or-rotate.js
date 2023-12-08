// Reverse or rotate?
// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).
// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.
// If
// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".


//My solution
function revrot(str, sz) {
    if(sz<=0 || !str || sz>str.length) return ''
    
    let chunks = []
    const sumCubes = chunk => chunk.split('').reduce( (a,b) => a + Math.pow(+b, 3), 0)
    const reverse = chunk => chunk.split('').reverse().join('')
    const rotate = chunk => chunk.slice(1) + chunk.slice(0,1)
    
    for(let i=0; i<str.length; i+=sz){
      let chunk = str.slice(i, i+sz)
      
      if(chunk.length!==sz) continue
      
      chunk = sumCubes(chunk)%2===0 ? reverse(chunk) : rotate(chunk)
      chunks.push(chunk)
    }
    
    return chunks.join('')
}