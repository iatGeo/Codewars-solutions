// Sort Arrays (Ignoring Case)
// DESCRIPTION:
// Sort the given array of strings in alphabetical order, case insensitive. For example:
// ["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
// ["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]

//My solution
const sortme = function (names) {
   return names.sort((a, b) => {
      return a.toLowerCase() < b.toLowerCase()
         ? -1
         : a.toLowerCase() > b.toLowerCase()
         ? 1
         : 0;
   });
};
