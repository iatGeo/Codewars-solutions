// // Form The Minimum
// // Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
// // Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.


//My solution
function minValue(values){
    let uniques = Array.from(new Set(values)).sort((a,b) => a-b)
    return +uniques.join('')
}