// Regexp Basics - is it a letter?
// DESCRIPTION:
// Complete the code which should return true if the given object is a single ASCII letter (lower or upper case), false otherwise.

//Given code
// String.prototype.isLetter = function() {
// }

//My solution
String.prototype.isLetter = function () {
   return /^[a-z]$/i.test(this);
};
