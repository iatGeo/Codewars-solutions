// Char Code Calculation
// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:
// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':
// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:
//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6


//My solution
function calc(x){
    const total1 = x.split('').map( word => word.charCodeAt()).join('')
    const total2 = total1.replace(/7/g, 1)
    return total1.split('').reduce( (a,b) => a + +b, 0) - total2.split('').reduce( (a,b) => a + +b, 0)
}