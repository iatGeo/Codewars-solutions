// Filter out the geese
// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
// The geese are any strings in the following array, which is pre-populated in your solution:
//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]


//My solution
function gooseFilter (birds) {
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
    return birds.filter(elem => geese.includes(elem) === false)
}