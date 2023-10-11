//List Filtering
//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.


//My solutions
function filter_list(l){
    let y = []
    l.forEach(elem => typeof(elem)==='number' ? y.push(elem) : null)
    return y
}

//The better one
function filter_list(l) {
    return l.filter( elem => typeof(elem)==='number' )
}