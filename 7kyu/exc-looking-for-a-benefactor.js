// Looking for a benefactor
// DESCRIPTION:
// The accounts of the "Fat to Fit Club (FFC)" association are supervised by John as a volunteered accountant. The association is funded through financial donations from generous benefactors. John has a list of the first n donations: [14, 30, 5, 7, 9, 11, 15] He wants to know how much the next benefactor should give to the association so that the average of the first n + 1 donations should reach an average of 30. After doing the math he found 149. He thinks that he could have made a mistake.
// if dons = [14, 30, 5, 7, 9, 11, 15] then new_avg(dons, 30) --> 149
// Could you help him?
// Task
// The function new_avg(arr, navg) should return the expected donation (rounded up to the next integer) that will permit to reach the average navg.
// Should the last donation be a non positive number (<= 0) John wants us:
// to return:
// Nothing in Haskell, Elm
// None in F#, Ocaml, Rust, Scala
// -1 in C, D, Fortran, Nim, PowerShell, Go, Pascal, Prolog, Lua, Perl, Erlang
// or to throw an error (some examples for such a case):
// IllegalArgumentException() in Clojure, Java, Kotlin
// ArgumentException() in C#
// echo ERROR in Shell
// argument-error in Racket
// std::invalid_argument in C++
// ValueError in Python
// So, he will clearly see that his expectations are not great enough. In "Sample Tests" you can see what to return.
// Notes:
// all donations and navg are numbers (integers or floats), arr can be empty.

//My solution
function newAvg(arr, newavg) {
   const result = Math.ceil(
      newavg * (arr.length + 1) - arr.reduce((a, b) => a + b, 0)
   );
   if (result <= 0) {
      throw new Error("Expected New Average is too low");
   }
   try {
      return result;
   } catch {
      console.error(error);
   }
}
