// Who ate the cookie?
// For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"
// Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)


//My solution
function cookie(x) {
    const t = typeof x
    const who = t=="string" ? 'Zach' : t=="number" ? 'Monica' : 'the dog'
    return `Who ate the last cookie? It was ${who}!`
}