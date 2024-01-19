// Color Ghost
// Create a class Ghost
// Ghost objects are instantiated without any arguments.
// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated
// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"


//My solution
class Ghost{
    constructor(){
      const colors = ['white', 'yellow', 'purple', 'red']
      const randomIndx = Math.floor( Math.random()*colors.length )
      this.color = colors[ randomIndx ]
    }
}