// Century From Year
// Given a year, return the century it is in.
// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20


//My solutions
function century(year) {
    let x = String(year)
    
    if(x.length<=2){
      return 1
    }else{
      return x.slice(-2) == +'00' ?  +x.slice(0,-2) : +x.slice(0,-2) +1
    }
}

const century = year => Math.ceil(year/100)