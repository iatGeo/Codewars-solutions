// Bouncing Balls
// A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.
// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).
// His mother looks out of a window 1.5 meters from the ground.
// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)?
// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.
// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.


//My solutions
function bouncingBall(h,  bounce,  window) {
    if( h>0 && bounce>0 && bounce<1 && window<h ){
      
      let result = 1
      let hNew = new Array()
      
      h*bounce > window ? hNew.push(h*bounce) : null
      
      while( hNew.findLast( elem => elem ) > window ){
        hNew.push( hNew.findLast( elem => elem ) * bounce )
        result += 2
      }
      return result
    }else{
      return -1
    }
}

//refactored into:
function bouncingBall(h,  bounce,  window) {
    if( h>0 && bounce>0 && bounce<1 && h>window ){
      
      let result = -1
      
      while( h>window ){
        h *= bounce, result +=2
      }
      return result
    }else{
      return -1
    }
}