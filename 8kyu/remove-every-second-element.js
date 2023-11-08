// Removing Elements
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.


//My solution
function removeEveryOther(arr){
    return arr.filter( (elem,index) => index%2 == 0 )
}