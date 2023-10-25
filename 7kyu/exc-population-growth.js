// Growth of a Population
// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
// the function nb_year should return n number of entire years needed to get a population greater or equal to p.
// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)


//My solution
function nbYear(p0, percent, aug, p) {
    percent *= 0.01
    let result = 0
    while(p0 < p){
      p0 += percent*p0 + aug
      result += 1
    }
    return result
}