// Switch it Up!
// When provided with a number between 0-9, return it in words.
// Input :: 1
// Output :: "One".


//My solution
function switchItUp(number){
    const data = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
    return data.at(number)
}