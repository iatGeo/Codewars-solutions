// Price of Mangoes
// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.


//My solutions
function mango(quantity, price){
    let total = 0
    for(let i=1; i<=quantity; i++){
      i%3===0 ? null : total+=1
    }
    return total*price
}

function mango(quantity, price){
    return price * (quantity - Math.floor( quantity/3 ))
}