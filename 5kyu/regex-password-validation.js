// Regex Password Validation
// You need to write regex that will validate a password to make sure it meets the following criteria:
// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a digit
// only contains alphanumeric characters (note that '_' is not alphanumeric)


//My solution
const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/

//^ - matches the beginning of the string
//(?=.*[a-z]) - a positive lookahead that matches any character zero or more times, followed by a lowercase letter. This ensures that the password contains at least one lowercase letter.
//(?=.*[A-Z]) - a positive lookahead that matches any character zero or more times, followed by an uppercase letter. This ensures that the password contains at least one uppercase letter.
//(?=.*\d) - a positive lookahead that matches any character zero or more times, followed by a digit. This ensures that the password contains at least one digit.
//[a-zA-Z\d]{6,} - matches any alphanumeric character (excluding '_') six or more times. This ensures that the password is at least six characters long and only contains alphanumeric characters.
//$ - matches the end of the string.