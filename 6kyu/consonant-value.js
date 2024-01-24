// Consonant value
// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".
// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.
// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"
// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26


//My solution
function solve(s){
    const scores = s.split(/[aeiou]+/).map( words => {
      return words.split('').map( elem => elem.charCodeAt()-96).reduce( (a,b) => a+b, 0)
    })
    return Math.max(...scores)
}