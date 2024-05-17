// Scrolling Text
// DESCRIPTION:
// Let's create some scrolling text!
// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.
// Example
// scrollingText("codewars") should return:
// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]

//My solution
function scrollingText(text) {
   let results = [];
   for (let i = 0; i < text.length; i++) {
      results.push((text.slice(i) + text.slice(0, i)).toUpperCase());
   }
   return results;
}
