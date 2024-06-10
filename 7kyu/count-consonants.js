// Count consonants
// DESCRIPTION:
// Complete the function that takes a string of English-language text and returns the number of consonants in the string.
// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

//My solution
function consonantCount(str) {
   if (str === null || !str) {
      return 0;
   } else {
      const nonCons = "AEIOUaeiou0123456789^&$#_ ";
      return str.split("").filter((letter) => !nonCons.includes(letter)).length;
   }
}
