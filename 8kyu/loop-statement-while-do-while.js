// Training JS #9: loop statement --while and do..while
// Complete function padIt, which accepts 2 parameters:
// str: a string representing the string to pad. We will pad it with "*" symbols on its left side and on its right side.
// n: a number indicating how many times to pad the string.
// Behaviour
// You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.
// Finally, return the padded string.


//My solution
function padIt(str,n){
    while (n>0) {
      if (n%2 === 0) {
        str = str + "*"
      }else{
        str = "*" + str
      }
      n--
    }
    return str
}