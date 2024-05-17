// Simple validation of a username with regex
// DESCRIPTION:
// Write a simple regex to validate a username. Allowed characters are:
// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).

//My solution
function validateUsr(username) {
   const regex = new RegExp("^[a-z0-9_]{4,16}$");
   return regex.test(username);
}
