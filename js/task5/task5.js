document.getElementById("bottom").addEventListener("click", function () { 
    event.preventDefault(); 
 
        let a = document.getElementById("first").value 
        let b = document.getElementById("second").value 
        const c = document.getElementById("third").value 
         
        if(a >= b && a >= c) { 
            if (b> c) { 
                console.log(a  , b , c ) 
            }else{ 
               console.log(a , c , b) 
            } 
        } 
        else if (b >= a && b >= c) { 
            if (a>c) { 
                console.log(b, a ,c) 
            }else{ 
                console.log(b, c ,a) 
            } 
        } 
        else { 
            console.log(c , b , a) 
        } 
             
    })
