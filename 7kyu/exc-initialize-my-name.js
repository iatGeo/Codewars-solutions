// Initialize my name
// DESCRIPTION:
// Some people just have a first name; some people have first and last names and some people have first, middle and last names.
// You task is to initialize the middle names (if there is any).
// Examples
// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

//My solution
function initializeNames(name) {
   let arr = name.split(" ");
   for (let i = 1; i < arr.length - 1; i++) {
      arr[i] = arr[i].charAt(0) + ".";
   }
   return arr.join(" ");
}
