// Simple Fun #176: Reverse Letter
// Given a string str, reverse it and omit all non-alphabetic characters.
// Example
// For str = "krishan", the output should be "nahsirk".
// For str = "ultr53o?n", the output should be "nortlu".
// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.
// [output] a string


//My solution
function reverseLetter(str) {
    return str.split('')
      .filter( word => word.match(/[a-z]/i) ? word : null )
      .reverse()
      .join('')
}