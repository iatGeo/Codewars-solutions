// Mumbling
// This time no story, no theory. The examples below show you how to write function accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.


//My solutions
function accum(s) {
	let arr = s.split('').map((elem,index) => elem.repeat(index+1))
  return arr.map( elem => {
    let first = elem.charAt(0).toUpperCase()
    let rest = elem.slice(1).toLowerCase()
    return first+rest
  }).join('-')
}

//1 line coded
function accum(s) {
    return s.split('').map( (elem,index) => elem.charAt(0).toUpperCase() + elem.repeat(index).toLowerCase() ).join('-')
}