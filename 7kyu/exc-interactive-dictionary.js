// Interactive Dictionary
// DESCRIPTION:
// In this kata, your job is to create a class Dictionary which you can add words to and their entries. Example:
// >>> let d = new Dictionary();
// >>> d.newEntry("Apple", "A fruit that grows on trees");
// >>> console.log(d.look("Apple"));
// A fruit that grows on trees
// >>> console.log(d.look("Banana"));
// Can't find entry for Banana
// Good luck and happy coding!

//My solution
// code given
// class Dictionary {
//   constructor() {
//     // your code
//   }

//   newEntry(key, value) {
//     // your code
//   }

//   look(key) {
//     // your code
//   }
// }

class Dictionary {
   constructor() {
      this.db = {};
   }

   newEntry(key, value) {
      this.db[key] = value;
   }

   look(key) {
      return this.db[key] || `Can't find entry for ${key}`;
   }
}
