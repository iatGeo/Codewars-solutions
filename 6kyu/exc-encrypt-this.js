// Encrypt this!
// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:
// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.


//My solution
function encryptThis(text){
    const swapRest = array => {
      let second = array[1]
      let last = array[array.length-1]
      array.splice(1, 1, last)
      array.splice(-1, 1, second)
    }
    
    const swapFirst = text => {
      let array = text.split('')
      swapRest(array)
      let result = array.join('')
      return result[0].charCodeAt() + result.slice(1)
    }
    
    if( !text.includes(' ') ){
      return text.length==1 ? `${text.charCodeAt()}` : swapFirst(text)
    }else{
      return text.split(' ').map( elem => elem.length===1 ? `${elem.charCodeAt()}` : swapFirst(elem)).join(' ')
    }
  }