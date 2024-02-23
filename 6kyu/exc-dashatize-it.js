// Dashatize it
// DESCRIPTION:
// Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.
// Ex:
// 274 -> '2-7-4'
// 6815 -> '68-1-5'


//My solution
function dashatize(num) {
    const result = num.toString().split("")
      .map(elem => {
        return elem%2 ? `-${elem}-` :  elem })
      .join("")
      .split("-")
      .filter(val => val != "")
      .join("-")
    return result
}