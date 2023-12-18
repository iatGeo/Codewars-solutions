// Alphabet war
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.
// The left side letters and their power:
//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:
//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.


//My solutions
function alphabetWar(fight){
    const right = 'mqdz'
    const left = 'wpbs'
    
    let rightRes = fight.split('')
      .filter( elem => right.includes(elem))
      .map( elem => elem==='m' ? 4 : elem==='q' ? 3 : elem==='d' ? 2 : 1)
      .reduce( (a,b) => a+b, 0)
    
    let leftRes = fight.split('')
      .filter( elem => left.includes(elem))
      .map( elem => elem==='w' ? 4 : elem==='p' ? 3 : elem==='b' ? 2 : 1)
      .reduce( (a,b) => a+b, 0)
    
    return leftRes>rightRes ? "Left side wins!" : rightRes>leftRes ? "Right side wins!" : "Let's fight again!"
}


function alphabetWar(fight){
    const letters = {'w': -4, 'p': -3, 'b': -2, 's': -1, 'm': 4, 'q': 3, 'd': 2, 'z': 1}
    let result = fight.split('').reduce( (a,b) => a + (letters[b] || 0), 0)
    return result>0 ? "Right side wins!" : result<0 ? "Left side wins!" : "Let's fight again!"
}