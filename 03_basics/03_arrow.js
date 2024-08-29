const user = {
    username:"nilima",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username="nilima"
//     console.log(this.username);//undefined
// }
// const chai = function(){
//     let username="nilima"
//     console.log(this.username);//undefined
// }
const chai =()=>{
    let username="nilima"
    //console.log(this.username);//undefined
    console.log(this);//{}
    
}

//chai()

//Explicit Return
// const addTwo = (num1,num2)=>{
//     return num1+num2;
// }

// console.log(addTwo(15,20));


//Implicit Return
// const addTwo = (num1,num2)=>num1+num2;
const addTwo = (num1,num2)=>(num1+num2);


//console.log(addTwo(15,20));

//Incase of object 
const objectEmp = () => ({username:"sam"})
console.log(objectEmp)