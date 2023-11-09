// Isograms
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.


//My solutions
function isIsogram(str){
    return new Set(str.toLowerCase()).size == str.length
}

//without using the Set Constructor
function isIsogram(str){
    let result = []
    str.toLowerCase().split('').forEach( elem => {
      result.includes(elem) ? null : result.push(elem)
    })
    return result.join('') === str.toLowerCase()
}