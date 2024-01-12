// Sum of Odd Cubed Numbers
// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.


//My solution
function cubeOdd(arr){
    const newArr = arr.map( elem => Math.pow(elem, 3))
    return newArr.includes(NaN) ? undefined : 
        newArr.filter( elem => elem%2!==0).reduce( (a,b) => a+b, 0)
}