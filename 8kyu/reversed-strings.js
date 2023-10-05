//Reversing strings


//My first solution
function solution(str){
    let newStr = ""
    for(let i=str.length - 1; i>=0; i--) {
      newStr += str[i]
    }
    return newStr;
}

//Later on solution
function reverseStr(str){
    return str.split('').reverse().join('')
}