// Exclamation marks series #2: Remove all exclamation marks from the end of sentence
// Remove all exclamation marks from the end of sentence.
// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"


//My solution
function remove(string){  
    return string.replace(/!+$/, '')
}