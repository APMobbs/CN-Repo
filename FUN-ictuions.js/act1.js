let orderCount = 0 

const takeOrder = (topping1, topping2, topping3) => {
  console.log(`your order is a pizza with ${topping1}, ${topping2} and ${topping3}`)
  orderCount++
}

takeOrder("chicken","pepperoni","salami")