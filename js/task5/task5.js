function numbers() {
  const a = prompt("Enter first number: ");
  const b = prompt("Enter second number: ");
  const c = prompt("Enter third number: ");
  
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
  }
  numbers();