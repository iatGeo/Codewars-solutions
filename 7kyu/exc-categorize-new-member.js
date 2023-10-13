//Categorize New Member
//The Western Suburbs Croquet Club has two categories of membership, Senior and Open.To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
//Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
//Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.


//My solution
function openOrSenior(data){
    let output = []
    for( let i=0; i<data.length; i++ ){
      if( data[i][0]>=55 && data[i][1]>7 ){
        output.push('Senior')
      }else{
        output.push('Open')
      }
    }
    return output
}
//Refactored later to
function openOrSenior(data){
    return data.map( ([age,handicap]) => (age>=55 && handicap>7) ? 'Senior' : 'Open' )
}