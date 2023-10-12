//Convert number to reversed array of digits


//My solution
function digitize(n) {
    return String(n).split('').reverse().map( elem => Number(elem) )
}