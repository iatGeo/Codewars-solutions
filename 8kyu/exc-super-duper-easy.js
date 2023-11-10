// Super Duper Easy
// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".


//My solution
function problem(x){
    return typeof x == 'number' ? 50*x + 6 : 'Error'
}