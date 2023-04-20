document.getElementById("bottom").addEventListener("click", function () { 
    event.preventDefault(); 
    let input = document.getElementById("enter").value 
let A = "100"  
for (i = 1 ; i < 1000; i++){  
if(i % input == 0 ) {  
console.log(i)}  
} 
})