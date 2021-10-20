function billboard(name, price = 30){
  var cost = 0;
  for (let i = 0; i < name.length; i++) {
    cost += price;
  }
  return cost;

} 