

function check(customer) {
  const { name, age, orders, amounts} = customer;


  let totalAmount = 0;
  for (let i = 0; i < customer.orders; i++) {
    totalAmount += customer.amounts[i];
  }
  
  if (customer.age >= 60 || (customer.orders >= 4 && totalAmount >= 100)) {
    return `${name} true`;
  } else {
    return `${name} false` ;
  }
}
const customer ={
  name: "Nigar",
  age:70,
  orders: 7,
  amounts:[30,50,120,80]
}

console.log(check(customer));
  
   