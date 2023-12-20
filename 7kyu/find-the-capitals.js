// Find the capitals
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.


//My solution
function capitals(word){
    return word.split('')
      .filter( elem => elem.match(/[A-Z]/) ? elem : null )
      .map( elem => word.indexOf(elem))
}