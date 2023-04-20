document.getElementById("bottom").addEventListener("click", function () { 
  event.preventDefault(); 
      let guestNumber = document.getElementById("guestsnumber").value  
       const small = "small table" 
       const medium = "medium table"  
       const large = "large table" 
       
     if (guestNumber<=2) {  
       return console.log(small)}  
       if (guestNumber<= 4 ) {  
         return console.log(medium)}  
       if (guestNumber<=8){  
         return console.log(large)  
       }  
           
       } )
