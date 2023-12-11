// The Coupon Code
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.
// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".


//My solution
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    
    let current = currentDate.replace(/,/g, '').split(' ')
      let currMonth = months.indexOf(current[0])
      let currDay = +current[1]
      let currYear = +current[2]
      
    let test = expirationDate.replace(/,/g, '').split(' ')
      let expMonth = months.indexOf(test[0])
      let expDay = +test[1]
      let expYear = +test[2]
    
    if( enteredCode!==correctCode ){
      return false
    }else if( currYear<expYear ){
      return true
    }else if( currMonth<expMonth && currYear==expYear ){
      return true
    }else if( currDay<=expDay && currMonth==expMonth && currYear==expYear ){
      return true
    }else{
      return false
    }
}

//The date function
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode===correctCode && new Date(currentDate) <= new Date(expirationDate)
}