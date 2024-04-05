// Inspiring Strings
// DESCRIPTION:
// When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.
// Example:
// 'red white blue' //returns string value of white
// 'red blue gold' //returns gold

//My solution
function longestWord(stringOfWords) {
   const arr = stringOfWords.split(" ").sort((a, b) => b.length - a.length);
   let longest = arr[0];
   for (let i = 1; i < arr.length; i++) {
      if (arr[i].length == longest.length) {
         longest = arr[i];
      } else {
         break;
      }
   }
   return longest;
}
