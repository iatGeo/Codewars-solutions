// Regex count lowercase letters
// Your task is simply to count the total number of lowercase letters in a string.
// Examples
// "abc" ===> 3
// "abcABC123" ===> 3
// "abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3
// "" ===> 0;
// "ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0
// "abcdefghijklmnopqrstuvwxyz" ===> 26


//My solution
function lowercaseCount(str){
    const regex = new RegExp('[a-z]', 'g')
    let results = str.match(regex)
    return results===null ? 0 : results.length
}