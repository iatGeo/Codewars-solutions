// Training JS #6: Basic data types--Boolean and conditional statements if..else
// Task
// Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, if val value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".


//My solutions
function trueOrFalse(val){
    if(val){
        return 'true'
    }else{
        return 'false'
    }
}

function trueOrFalse(val){
    return val ? 'true' : 'false'
}