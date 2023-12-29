// Mexican Wave
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
// Rules
//  1.  The input string will always be lower case but maybe empty.
//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]


//My solution
function wave(str){
    if(str.length!==0){
      let results = []
      const regex = new RegExp('[a-z]')
      
      for(let i=0; i<str.length; i++){
        if( regex.test(str.charAt(i)) ){
          let x = str.charAt(i).toUpperCase()
          let phrase = str.split('')
            phrase.splice(i, 1, x)
          results.push( phrase.join(''))
        }
      }
      return results
    }
    return []
}