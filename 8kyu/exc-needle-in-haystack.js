//A Needle in the Haystack
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:
// Example(Input --> Output)


//My solution
function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf('needle')}`
}