// Enumerable Magic #4 - True for None?
// DESCRIPTION:
// Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.

//My solution
//original Class
// class Cube {
//   getSide() {
//     return this.side;
//   }
//   setSide(n) {
//     this.side = Math.abs(n);
//   }
// }

class Cube {
   constructor(side = 0) {
      this.side = side;
   }
   getSide() {
      return Math.abs(this.side);
   }
   setSide(side) {
      this.side = side;
   }
}
