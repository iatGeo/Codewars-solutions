// Regex validate PIN code
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.


//My solution
function validatePIN (pin) {
    if(pin){
      const result = pin.match(/[0-9]/g)
      return result.length == pin.length && (result.length == 4 || result.length == 6)
    }else{
      return false
    }
}