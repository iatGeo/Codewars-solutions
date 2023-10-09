// //Total amount of points
// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
// For example: ["3:1", "2:2", "0:1", ...]
// Points are awarded for each match as follows:
// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.


//My solution
function points(games) {
    let champScore = 0
    for( let i=0; i<games.length; i++ ){
      let y = games[i].split('')
      if( y[0]>y[2] ){
        champScore += 3
      }else if( y[0]==y[2] ){
        champScore += 1
      }
    }
    return champScore
}

//Other interesting solution
const points = games => games.reduce((output,current) => {
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
  },0)