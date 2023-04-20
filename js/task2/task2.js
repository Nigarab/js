document.getElementById("bottom").addEventListener("click", function () { 
    event.preventDefault(); 
    let kilometres = document.getElementById("kilometr").value; 
   
  const end =   5 + kilometres * 0.25   
  return console.log(end) 
  
})
