// sPoNgEbOb MeMe
// DESCRIPTION:
// Remember the spongebob meme that is meant to make fun of people by repeating what they say in a mocking way?
// You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.
// Example:
// input:  "stop Making spongebob Memes!"
// output: "StOp mAkInG SpOnGeBoB MeMeS!"

//My solution
function spongeMeme(sentence) {
   return sentence
      .split("")
      .map((word, index) =>
         index % 2 ? word.toLowerCase() : word.toUpperCase()
      )
      .join("");
}
