// Fix string case
// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.


//My solutions
function solve(s){
    const upper = s.split('').filter( elem => elem == elem.toUpperCase()).length
    const lower = s.split('').filter( elem => elem == elem.toLowerCase()).length
    
    return lower >= upper ? s.toLowerCase() : s.toUpperCase()
}

function solve(s){
    let x = s.match(/[a-z]/g)
    
    if(x==null){
      return s
    }else{
      return x.length >= s.length/2 ? s.toLowerCase() : s.toUpperCase()
    }
}