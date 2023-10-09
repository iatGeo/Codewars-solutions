//Complementary DNA
//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side.


//My solutions
function DNAStrand(dna){
    let x = dna.split('')
    x.forEach( (elem,indx) => {
      if( elem==='A' ){
        x.splice(indx,1,'T')
      }else if( elem==='T' ){
        x.splice(indx,1,'A')
      }else if( elem==='G' ){
        x.splice(indx,1,'C')
      }else{
        x.splice(indx,1,'G')
      }
    })
    return x.join('')
}

//Refactored into this:
function DNAStrand(dna){
    let x = dna.split('')
    x.forEach( (elem,indx) => {
        switch(elem){
            case 'A': return x.splice(indx,1,'T'); break;
            case 'T': return x.splice(indx,1,'A'); break;
            case 'G': return x.splice(indx,1,'C'); break;
            default: x.splice(indx,1,'G')
        }
    })
    return x.join('')
}

//Other interesting solution
let pairs = {'A':'T', 'T':'A', 'G':'C', 'C':'G'}

function DNAStrand(dna){
  return dna.replace( /./g, function(c){
    return pairs[c]
  } )
}
