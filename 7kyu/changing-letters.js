// Changing letters
// DESCRIPTION:
// When provided with a String, capitalize all vowels
// For example:
// Input : "Hello World!"
// Output : "HEllO WOrld!"
// Note: Y is not a vowel in this kata.


//My solutions
function swap (string) {
    const vowels = 'aeiou'
    return string.split('')
      .map(letter => vowels.includes(letter) ? letter.toUpperCase() : letter)
      .join('')
}

function swap (string) {
    return string.replace(/[aeiou]/g, letter => letter.toUpperCase())
}