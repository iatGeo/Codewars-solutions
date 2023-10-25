// Remove String Spaces
// Write a function that removes the spaces from the string, then return the resultant string.


//My solutions
function noSpace(x){
    return x.split('').filter( elem => elem !== ' ').join('')
}

function noSpace(x){
    return x.replace(/\s/g, '')
}