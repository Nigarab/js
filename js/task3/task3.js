function product() {  
  const productName = prompt("Enter product name");  
  const unitePrice =  (prompt("Enter unite price"));  
  const quantity =  (prompt("Enter quantity")); 
  const participates =  (prompt("Participates in the promotion or not? ")); 
  const amount = unitePrice * 0.75
  if (quantity >= 5 && participates.toLowerCase() == "yes") {
    console.log(amount)
    return amount
  }
  const discount = unitePrice * 0.9 
  if (quantity >= 5) { 
     console.log(discount); 
     return discount
  }  
  const discount2 = unitePrice * 0.85 
  if (participates.toLowerCase() == "yes") { 
    console.log(discount2); 
    return discount2       
  } else if (participates.toLowerCase() == "no"){ 
    console.log(unitePrice);
    return unitePrice
  } 
}  
product();  
