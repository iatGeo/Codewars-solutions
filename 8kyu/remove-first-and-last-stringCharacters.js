// Remove First and Last Character
// Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.


//My solution
function removeChar(str){
   return str.slice(1, -1)
}


//Other users' interesting solutions
const removeChar = str => str.slice(1,-1)