// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.


//My solution
function replace(s){
    return s.replace(/[aeiuo]/ig, "!")
}