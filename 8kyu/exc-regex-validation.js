// validate code with simple regex
// Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.
// You can assume the input will always be a number.


//My solution
function validateCode(code){
    const regex = new RegExp('^[123]')
    return regex.test(code)
}