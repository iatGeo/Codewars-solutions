// Find Count of Most Frequent Item in an Array
// DESCRIPTION:
// Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0
// Example
// input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
// ouptut: 5 
// The most frequent number in the array is -1 and it occurs 5 times.


//My solution
function mostFrequentItemCount(collection) {
    collection.sort((a,b) => a - b)
    let result = 0
    const uniques = Array.from(new Set([...collection]))
    uniques.forEach(elem => {
      const low = collection.indexOf(elem)
      const top = collection.lastIndexOf(elem)
      const diff = top - low + 1
      if (diff > result) result = diff
    })
    return result
}