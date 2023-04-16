function customer() { 
    const lastName = prompt("Enter your Lastname:"); 
    const firstName =  prompt("Enter your Firstname:"); 
    const email =  prompt("Enter your email"); 
    const customerString = `${email} - ${lastName} ${firstName}`; 
    return  customerString; 
    
} 
const customers= customer();
console.log(customers);

