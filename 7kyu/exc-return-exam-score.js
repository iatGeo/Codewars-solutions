// Check the exam
// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.
// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
// If the score < 0, return 0.



//My solution
function checkExam(array1, array2) {
    let score = 0
    for(let i=0; i<array1.length; i++){
      array1[i] == array2[i] ? score += 4 : array2[i] !== '' ? score -= 1 : null
    }
    return score < 0 ? 0 : score
}