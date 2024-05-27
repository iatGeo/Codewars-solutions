// Heron's formula
// DESCRIPTION:
// Write function heron which calculates the area of a triangle with sides a, b, and c (x, y, z in COBOL).
// Heron's formula:
// square root of 𝑠∗(𝑠−𝑎)∗(𝑠−𝑏)∗(𝑠−𝑐)s∗(s−a)∗(s−b)∗(s−c)
// where
// 𝑠=𝑎+𝑏+𝑐2s=2a+b+c
// Output should have 2 digits precision.

//My solution
function heron(a, b, c) {
   const s = (a + b + c) / 2;
   return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}
