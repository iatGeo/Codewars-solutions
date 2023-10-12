//Find the smallest integer in the array


//My solution
class SmallestIntegerFinder {
    findSmallestInt(args) {
      let y = args.sort( (a,b) => a-b )
      return y[0]
    }
}