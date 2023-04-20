document.getElementById("bottom").addEventListener("click", function () { 
    event.preventDefault(); 
        let input = document.getElementById("number").value 
        const numbers = {  
          1: "one",  
          2: "two",  
          3: "three",  
          4: "four",  
          5: "five",  
          6: "six",  
          7: "seven",  
          8: "eight",  
          9: "nine",  
          10: "ten",  
          11: "eleven",  
          12: "twelve",  
          13: "thirteen",  
          14: "fourteen",  
          15: "fifteen",  
          16: "sixteen",  
          17: "seventeen",  
          18: "eighteen",  
          19: "nineteen",  
          20: "twenty",  
          30: "thirty",  
          40: "forty",  
          50: "fifty",  
          60: "sixty",  
          70: "seventy",  
          80: "eighty",  
          90: "ninety",  
        };  
        if (input < 10) {  
          return console.log(numbers[input]);  
        }  
        if (input >= 10 && input < 20) {  
          return console.log(numbers[input]);  
        }  
      const onesDigit = input % 10;  
          if (onesDigit === 0) {  
            return console.log( numbers[input[0]+"0"]);  
              
          } else {  
              return console.log(`${numbers[input[0]+"0"]} ${numbers[input[1]]}`)  
          }  
      })