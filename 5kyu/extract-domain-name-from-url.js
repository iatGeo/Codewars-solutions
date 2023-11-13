// Extract the domain name from a URL
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"


//My solution
function domainName(url){
    return url.replace(/(https?:\/\/)?(www\.)?/i, '').split('.')[0]
}

//The recommended one at stackOverflow
function domainName(url){
    return url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?/img, '').replace(/\..*/, '')
}