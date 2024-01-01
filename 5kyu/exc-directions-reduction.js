// Directions Reduction
// Once upon a time, on a way through the old wild mountainous west,…
// … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.
// Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!
// Task
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).
// Notes
// Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].
// if you want to translate, please ask before translating.


//My solution
function dirReduc(arr){

    let check = function(array){
      const x = ['WEST', 'EAST']
      const y = ['SOUTH', 'NORTH']
      for(let i=1; i<array.length; i++){
        let z = Array.from(new Set([ array[i-1], array[i] ]))
        if(z.every(dir => x.includes(dir)) && z.length==2) array.splice(i-1,2)
        if(z.every(dir => y.includes(dir)) && z.length==2) array.splice(i-1,2)
      }
      return array
    }
    
    do{
      check(arr)
    }while(check(arr)!==arr)
    return check(arr)
}