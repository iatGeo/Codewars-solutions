// Exclamation marks series #17: Put the exclamation marks and question marks on the balance - are they balanced?DESCRIPTION:
// Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?
// If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".
// Examples
// "!!", "??"     -->  "Right"
// "!??", "?!!"   -->  "Left"
// "!?!!", "?!?"  -->  "Left"
// "!!???!????", "??!!?!!!!!!!"  -->  "Balance"

//My solution
function balance(left, right) {
   function getExcMark(val) {
      const results = val.match(/\!/g);
      return results ? results.length * 2 : 0;
   }
   function getQuesMark(val) {
      const results = val.match(/\?/g);
      return results ? results.length * 3 : 0;
   }

   const leftRes = getExcMark(left) + getQuesMark(left);
   const rightRes = getExcMark(right) + getQuesMark(right);

   return leftRes > rightRes
      ? "Left"
      : rightRes > leftRes
      ? "Right"
      : "Balance";
}
