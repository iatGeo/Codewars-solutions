// Return the day
// Complete the function which returns the weekday according to the input number:
// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"


//My solution
function whatday(num) {
    const days = [null, "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return days[num] || "Wrong, please enter a number between 1 and 7"
}