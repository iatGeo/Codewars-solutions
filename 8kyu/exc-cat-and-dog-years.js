// Cat years, Dog years
// I have a cat and a dog.
// I got them at the same time as kitten/puppy. That was humanYears years ago.
// Return their respective ages now as [humanYears,catYears,dogYears]
// NOTES:
// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that


//My solution
function humanYearsCatYearsDogYears(humanYears){
    let catYears = 24
    let dogYears = 24
    
    if(humanYears == 2){
      return [humanYears, catYears, dogYears]
    }else if(humanYears > 2){
      let count = 2
      while(count < humanYears){
        catYears += 4
        dogYears += 5
        count++
      }
      return [humanYears, catYears, dogYears]
    }else{
      return [1,15,15]
    }
}