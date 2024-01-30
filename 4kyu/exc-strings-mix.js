// Strings Mix
// Given two strings s1 and s2, we want to visualize how different the two strings are. We will only take into account the lowercase letters (a to z). First let us count the frequency of each lowercase letters in s1 and s2.
// s1 = "A aaaa bb c"
// s2 = "& aaa bbb c d"
// s1 has 4 'a', 2 'b', 1 'c'
// s2 has 3 'a', 3 'b', 1 'c', 1 'd'
// So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. In the following we will not consider letters when the maximum of their occurrences is less than or equal to 1.
// We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.
// The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its maximum if this maximum is strictly greater than 1; these letters will be prefixed by the number of the string where they appear with their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:.
// In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) will be in decreasing order of their length and when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by codepoint); the different groups will be separated by '/'. See examples and "Example Tests".
// Hopefully other examples can make this clearer.
// s1 = "my&friend&Paul has heavy hats! &"
// s2 = "my friend John has many many friends &"
// mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"
// s1="Are the kids at home? aaaaa fffff"
// s2="Yes they are here! aaaaa fffff"
// mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"


//My solution
function mix(s1, s2){
    const smallCases = 'abcdefghijklmnopqrstuvwxyz'
    let results = []
    
    //Abstraction of a reusable function later on
    const innerFunc = str => {
      let groupedObj = str.split('')
        .filter( word => smallCases.includes(word))
        .filter( (word,index,array) => array.indexOf(word)!==array.lastIndexOf(word))
        .reduce(
        (prev, current) => ({
            ...prev,
            [current]: [...(prev[current] || []), current],
          }),
          {}
        )
      return Object.values(groupedObj)
    }
    
    let res1 = innerFunc(s1),
        res2 = innerFunc(s2)
    
    res1.forEach( arr => {
      let candidates = []
      candidates.push( arr)
      candidates.push( res2.filter( x => x.includes(arr[0]))[0] || [] )
      
      if( candidates[0].length===candidates[1].length ){
        results.push( ['3:'].concat(candidates[0]) ) //3 instead of = for sorting reasons later
      }else if( candidates[0].length>candidates[1].length ){
        results.push( ['1:'].concat(candidates[0]) )
      }else{
        results.push( ['2:'].concat(candidates[1]) )
      }
    })
    res2.forEach( arr => !results.some( elem => elem[elem.length-1] === arr[0]) ? 
      results.push( ['2:'].concat(arr)) : null
    )
    
    return results.sort( (a,b) => {
      if( a.length!==b.length ){
        return b.length - a.length
      }else{
        if( a[0].localeCompare(b[0])!==0 ){
          return a[0].localeCompare(b[0])
        }else{
          return a[1].localeCompare(b[1]) //all elements of the same subarray, after index 0, are equal/same
        }
      }
    }).map( elem => elem.map( arr => arr.replace(/3/, '=')))
      .map( elem => elem.join(''))
      .join('/')
}