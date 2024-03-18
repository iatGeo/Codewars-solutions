// Compare Strings by Sum of Chars
// DESCRIPTION:
// Compare two strings by comparing the sum of their values (ASCII character code).
// For comparing treat all letters as UpperCase
// null/NULL/Nil/None should be treated as empty strings
// If the string contains other characters than letters, treat the whole string as it would be empty
// Your method should return true, if the strings are equal and false if they are not equal.
// Examples:
// "AD", "BC"  -> equal
// "AD", "DD"  -> not equal
// "gf", "FG"  -> equal
// "zz1", ""   -> equal (both are considered empty)
// "ZzZz", "ffPFF" -> equal
// "kl", "lz"  -> not equal
// null, ""    -> equal


//My solution
function compare(s1, s2) {
    if (!s1 || s1.match(/[\d!#]/) !== null) s1 = ''
    if (!s2 || s2.match(/[\d!#]/) !== null) s2 = ''
    const s1Total = s1.toUpperCase().split('').map(word => word.charCodeAt(0)).reduce((a,b) => a + b, 0)
    const s2Total = s2.toUpperCase().split('').map(word => word.charCodeAt(0)).reduce((a,b) => a + b, 0)
    return s1Total === s2Total
}