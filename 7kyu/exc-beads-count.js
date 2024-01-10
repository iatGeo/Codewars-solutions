// Simple beads count
// Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.


//My solution
function countRedBeads(n) {
    return n<2 ? 0 : (n-1)*2
}