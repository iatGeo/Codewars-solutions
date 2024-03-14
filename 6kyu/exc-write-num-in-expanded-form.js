// Write Number in Expanded Form
// DESCRIPTION:
// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:
// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.


//My solution
function expandedForm(num) {
    const str = String(num)
    let nums = []
    str.split('').forEach((val,index) => {
      if (val !== '0') {
        const result = val + `${'0'.repeat(str.length - 1 - index)}`
        nums.push(result)
      }
    })
    return nums.join(' + ')
}