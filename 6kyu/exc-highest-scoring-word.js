// Highest Scoring Word
// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// For example, the score of abad is 8 (1 + 2 + 1 + 4).
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.


//My solution
function high(x){
    const alphabet = ' abcdefghijklmnopqrstuvwxyz'
    
    let words = x.split(' ').map( (elem,index) => {
      let score = elem.split('')
        .map( letter => alphabet.indexOf(letter))
        .reduce( (a,b) => a+b)
      
      return [score, index]
    })
    
    words.sort( (a,b) => {
      if(a[0]===b[0]){
        return a[1] - b[1]
      }else{
        return b[0] - a[0]
      }
    })
    
    const pos = words[0][1]
    return x.split(' ')[pos]
}