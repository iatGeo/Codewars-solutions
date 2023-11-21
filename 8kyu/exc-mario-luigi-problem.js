// Lario and Muigi Pipe Problem
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.
// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.
// The pipes are correct when each pipe after the first is 1 more than the previous one.
// Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).


//My solution
function pipeFix(numbers){
    const first = numbers[0]
    const last = numbers[numbers.length-1]
    
    let result = new Array()
    for(let i=first; i<=last; i++){
      result.push(i)
    }
    return result
}