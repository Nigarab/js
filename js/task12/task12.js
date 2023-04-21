document.getElementById("bottom").addEventListener("click", function () { 
    event.preventDefault(); 
    let number = document.getElementById("number").value;
    let sum = 0;
  
    for (let i = 0; i < number.length; i++) {
      sum += + number[i];
    }
  
    console.log(sum);
  });

    