// Highest Rank Number in an Array
// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.
// Note: no empty arrays will be given.
// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3


//My solution
function highestRank(arr){
    arr.sort()
    let results = {}
    arr.forEach( num => results.hasOwnProperty(num) ? results[num] += 1 : results[num] = 1)
    
    return +Object.keys(results).sort( (a,b) => {
      if(results[a]===results[b]){
        return b-a
      }else{
        return results[b]-results[a]
      }
    })[0]
}