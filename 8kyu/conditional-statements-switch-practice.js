//Conditional statement--switch
//Complete the function howManydays. It accepts 1 parameter month, which means the month of the year. Different months have a different number of days as shown in the table below. Return the number of days that are in month. There is no need for input validation: month will always be greater than 0 and less than or equal to 12.


//My solutions
function howManydays(month){
  let days
  if( month==1 || month==3 || month==5 || month==7|| month==8 || month==10 || month==12 ){
    days = 31
  }else if( month==4 || month==6 || month==9 || month==11 ){
    days = 30
  }else{
    days = 28
  }
  return days
}
//Refactored into
function howManydays(month){
    let days
    if( month==4 || month==6 || month==9 || month==11 ){
      days = 30
    }else if(month==2){
      days = 28
    }else{
        days = 31
    }
    return days
  }

//using switch-case
function howManydays(month){
    var days;
    switch (month){
      case 1: days = 31
        break;
      case 2: days = 28
        break;
      case 3: days = 31
        break;
      case 4: days = 30
        break;
      case 5: days = 31
        break;
      case 6: days = 30
        break;
      case 7: days = 31
        break;
      case 8: days = 31
        break;
      case 9: days = 30
        break;
      case 10: days = 31
        break;
      case 11: days = 30
        break;
      case 12: days = 31
        break;
    }
    return days;
}
//refactored into
function howManydays(month){
    switch(month){
        case 2: return 28
        case 4: case 6: case 9: case 11: return 30
        default: return 31
    }
}