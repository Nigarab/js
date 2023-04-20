document.getElementById("bottom").addEventListener("click", function () { 
    event.preventDefault(); 
    let lastName = document.getElementById("lastname").value; 
    let firstName = document.getElementById("firstname").value; 
    let email = document.getElementById("email").value; 
   
   
    const customerString = `${email} - ${lastName} ${firstName}`; 
    return console.log(customerString); 
  });

