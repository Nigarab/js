document.getElementById("bottom").addEventListener("click", function () { 
    event.preventDefault(); 
     let lenght =document.getElementById("lenght").value 
     let width = document.getElementById("width").value 
    let height = document.getElementById("height").value 
    let weight = document.getElementById("weight").value 
      let deliverDistance = document.getElementById("distance").value  
     const sum = +lenght + +width + +height;  
  
if (sum < 150 && lenght < 100 && width < 100 && height < 100 && weight < 10  
          && deliverDistance < 10 && deliverDistance > 3  
      ) {  
        console.log("Accepted");  
      } else {  
        console.log("Couldn't accept")  
    }  
})