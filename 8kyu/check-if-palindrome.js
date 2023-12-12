// Is it a palindrome?
// Write a function that checks if a given string (case insensitive) is a palindrome.
// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.


//My solution
function isPalindrome(x) {
    return String(x).toLowerCase() === String(x).toLowerCase().split('').reverse().join('')
}