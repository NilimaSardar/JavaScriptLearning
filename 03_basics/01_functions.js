// function sayName(){
//     console.log("Nilima");
// }
// sayName()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }
// addTwoNumbers(3,8)//11

// addTwoNumbers();//NaN
// addTwoNumbers(3,"4");//34
// addTwoNumbers(3,"a");//3a
// addTwoNumbers(3,null);//3

// const result = addTwoNumbers(3,5);
// console.log("Result: ",result);//undefined

function addTwoNumbers(number1,number2){
    // let result = number1+number2;
    // return result;
    return number1+number2;
}
// const result = addTwoNumbers(3,5);
// console.log("Result: ",result);

// function loginUserMessage(username){
//     console.log(`${username}, you are logged in`); 
// }
// loginUserMessage("Nilima")
// loginUserMessage("")
// loginUserMessage()

// function loginUserMessage(username){
//     if(username === undefined){
//         // console.log(`please enter a username`);
//         return;
//     }
//     return `${username}, you are logged in`; 
// }

// console.log(loginUserMessage());
// console.log(loginUserMessage);
// console.log(loginUserMessage("N I L I M A"));


// +++++++Giving default username(value)++++++++
function loginUserMessage(username = "Sam"){
    if(username === undefined){
        console.log(`please enter a username`);
        return;
    }
    return `${username}, you are logged in`; 
}

// console.log(loginUserMessage());
// console.log(loginUserMessage("Nilima"));

// SHOPPING CART
// function calculateCartPrice(...num1){
//     return num1;
// }
// console.log(calculateCartPrice(100,200,400,5000));

function calculateCartPrice(val1,val2,...num1){
    return num1;
}
//console.log(calculateCartPrice(100,300,200,400,5000));

//Functionswith objects
const user ={
    username:"nilima",
    price:199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and the price is ${anyObject.price}`);
}

// handleObject(user)
// handleObject({
//     username:"RAM",
//     price:599
// })


//Functions with Arrays
const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    console.log(getArray[2]);
}
// returnSecondValue(myNewArray)
returnSecondValue([200,430,240,3000,200])