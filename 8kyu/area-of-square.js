// Area of a Square
// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.
// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)


//My solution
function squareArea(A){
    const circum = 4 * A
    const radius = circum / (2 * Math.PI)
    const area = Math.pow(radius, 2)
    return Math.round(area*100)/100
}