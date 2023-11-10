// Tribonacci Sequence
// Well met with Fibonacci bigger brother, AKA Tribonacci.
// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next.
// you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.


//My solution
function tribonacci(signature,n){
    for(let i=0; i<=n-3; i++){
      signature.push(signature[i] + signature[i+1] + signature[i+2])
    }
    return signature.slice(0,n)
}