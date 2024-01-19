// Street Fighter 2 - Character Selection
// You'll have to simulate the video game's character selection screen behaviour, more specifically the selection grid. 
// Selection Grid Layout in text:
// | Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
// | Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |
// Input:
// the list of game characters in a 2x6 grid;
// the initial position of the selection cursor (top-left is (0,0));
// a list of moves of the selection cursor (which are up, down, left, right)
// Output:
// the list of characters who have been hovered by the selection cursor after all the moves (ordered and with repetition, all the ones after a move, whether successful or not, see tests)
// For this easy version the fighters grid will always be the same in all tests
// Rules:
// Selection cursor is circular horizontally but not vertically!
// As you might remember from the game, the selection cursor rotates horizontally but not vertically; that means that if I'm in the leftmost and I try to go left again I'll get to the rightmost (examples: from Ryu to Vega, from Ken to M.Bison) and vice versa from rightmost to leftmost.
// Instead, if I try to go further up from the upmost or further down from the downmost, I'll just stay where I am located (examples: you can't go lower than lowest row: Ken, Chun Li, Zangief, Dhalsim, Sagat and M.Bison in the above image; you can't go upper than highest row: Ryu, E.Honda, Blanka, Guile, Balrog and Vega in the above image).


//My solution
function streetFighterSelection(fighters, position, moves){
    //position coords: 1st coord is the vertical movement and 2nd coord the horizontal one
    //vertical values: 0(up) || 1(down)
    //horizontal values: [0-5] as per the fighters' indexes
    
    const uppers = fighters[0], downers = fighters[1] 
    let results = []
    moves.forEach( move => {
      if(move==='up'){
        position[0]===0 ? null : position[0]-=1
        position[0]===0 ? results.push( uppers[position[1]]) : results.push( downers[position[1]])
      }
      if(move==='down'){
        position[0]===1 ? null : position[0]+=1
        position[0]===0 ? results.push( uppers[position[1]]) : results.push( downers[position[1]])
      }
      if(move==='right'){
        position[1]===5 ? position[1]=0 : position[1]+=1
        position[0]===0 ? results.push( uppers[position[1]]) : results.push( downers[position[1]])
      }
      if(move==='left'){
        position[1]===0 ? position[1]=5 : position[1]-=1
        position[0]===0 ? results.push( uppers[position[1]]) : results.push( downers[position[1]])
      }
    })
    return results
}