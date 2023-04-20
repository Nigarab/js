document.getElementById("bottom").addEventListener("click", function () { 
  event.preventDefault(); 
   let productName = document.getElementById("product").value 
   let unitePrice= document.getElementById("prize").value 
   let quantity =document.getElementById("quantity").value 
   let participates =document.getElementById("promotion").value 
   const amount = unitePrice * 0.75 
   if (quantity >= 5 && participates == "yes") { 
      return console.log(amount) 
   } 
   const discount = unitePrice * 0.9  
   if (quantity >= 5) {  
      return console.log(discount);  
       
   }   
   const discount2 = unitePrice * 0.85  
   if (participates == "yes") {  
      return  console.log(discount2);  
            
   } else if (participates == "no"){  
      return console.log(unitePrice); 
       
   }  
  })
