// Grasshopper - Terminal game combat function
// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.


//My solution
function combat(health, damage) {
    return health>=damage ? health-damage : 0
}