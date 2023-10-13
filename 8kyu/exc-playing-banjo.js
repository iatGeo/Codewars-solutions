//Are You Playing Banjo?
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo" 
// name + " does not play banjo"


//My solution
function areYouPlayingBanjo(name) {
    let x = name.toLowerCase()
    if( x[0]==='r' ){
      return name + " plays banjo" 
    }else{
      return name + " does not play banjo"
    }
}