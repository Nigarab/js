function tables() { 
    const guestNumber = prompt("enter guests number from 1 to 8"); 
    const small = "small table"; 
    const medium = "medium table"; 
    const large = "large table"; 
   
    if (guestNumber <= 2) { 
      console.log(small); 
    } 
    if (guestNumber <= 4) { 
      console.log(medium); 
    } 
    if (guestNumber <= 8) { 
      console.log(large); 
    } 
  } 
   tables();