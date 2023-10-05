//Write a function that takes an array of numbers and returns the sum of the numbers


//My solution
function sum(numbers) {
    return numbers.reduce( (a,b) => a+b, 0)
}