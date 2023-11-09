// Remove anchor from URL
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"


//My solution
function removeUrlAnchor(url){
    let arr = url.split('')
    return arr.includes('#') ? arr.slice(0, arr.indexOf('#')).join('') : arr.join('')
}