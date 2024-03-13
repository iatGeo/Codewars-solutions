// SevenAte9
// DESCRIPTION:
// Write a function that removes every lone 9 that is inbetween 7s.
// "79712312" --> "7712312"
// "79797"    --> "777"


//My solution
function sevenAte9(str) {
    return str.split('')
      .map((num,index,arr) => num==='9' && arr[index-1]==='7' && arr[index+1]==='7' ? num = '' : num )
      .join('')
}