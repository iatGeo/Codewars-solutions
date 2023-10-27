// Jaden Casing Strings
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.


//My solution
String.prototype.toJadenCase = function () {
    return this.split(' ').map( elem => elem[0].toUpperCase() + elem.slice(1) ).join(' ')
}