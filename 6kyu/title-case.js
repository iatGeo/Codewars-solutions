// Title Case
// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.
// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.


//My solution
function titleCase(title, minorWords) {
    if(typeof minorWords !== 'undefined'){
      minorWords = minorWords.toLowerCase().split(' ')
      if(title !== ''){
        let resultStr = title.toLowerCase().split(' ').map( word => !minorWords.includes(word) ? word[0].toUpperCase() + word.slice(1) : word ).join(' ')
        return resultStr[0].toUpperCase() + resultStr.slice(1)
      }else{
        return ''
      }
    }else{
      return title !== '' ? title.toLowerCase().split(' ').map( word => word[0].toUpperCase() + word.slice(1) ).join(' ') : ''
    }
}