// Special Number (Special Numbers Series #5)
// Definition
// A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5
// Given a number determine if it special number or not .
// Notes
// The number passed will be positive (N > 0) .
// All single-digit numbers within the interval [1:5] are considered as special number.
// Explanation:
// Although, there is a digit (5) Within the interval But the second digit is not (Must be ALL The Number's Digits ) .
// specialNumber(513) ==> return "Special!!"
// specialNumber(709) ==> return "NOT!!"


//My solution
function specialNumber(n){
    return String(n).match(/[6789]/g) ? "NOT!!" : "Special!!"
}