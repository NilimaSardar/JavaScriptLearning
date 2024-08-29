//Immediately Invoked Function Expression(IIFE)

//named IIFE
(function chai(){
    console.log("CONNECTED")
})();

//Unnamed IIFE
(()=>{
    console.log("CONNECTED TWO");
    
})();

//passing Parameter
((user)=>{
    console.log(`Hello, ${user}!`)
})("Nilima")


console.log("outside IIFE")