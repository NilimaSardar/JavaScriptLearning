try {
    console.log("I am try block");
    name;
    console.log("check");
    
    
} catch (error) {
    console.log("I am catch block");
    console.log(error.message);
}

/* 
if any error occur in try block
catch block will execute
*/