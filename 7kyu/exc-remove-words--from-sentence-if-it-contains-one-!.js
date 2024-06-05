// Exclamation marks series #7: Remove words from the sentence if it contains one exclamation mark
// DESCRIPTION:
// Description:
// Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.
// Examples
// remove("Hi!") === ""
// remove("Hi! Hi!") === ""
// remove("Hi! Hi! Hi!") === ""
// remove("Hi Hi! Hi!") === "Hi"
// remove("Hi! !Hi Hi!") === ""
// remove("Hi! Hi!! Hi!") === "Hi!!"
// remove("Hi! !Hi! Hi!") === "!Hi!"

//My solution
function remove(string) {
   return string
      .split(" ")
      .filter(
         (word) =>
            !/\!/.test(word) || word.indexOf("!") !== word.lastIndexOf("!")
      )
      .join(" ");
}
