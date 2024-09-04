//if else

const temperature= 41;
if(temperature < 50){
    console.log(`Temperature is less than 50 that is ${temperature}`);
}else{
    console.log(`Greater than 50`);
}

console.log("execute");
//<,>,<=,>=,==,!=,===,!==


const score = 200;
if(score>100){
    let power = "fly";
    console.log(`user power: ${power}`);
}
// console.log(`user power: ${power}`); //error

//also we write as

const balance = 1000
if(balance>500)console.log('test'),console.log('test2');


//&&,||

//switch

const month = "mar";
switch(month){
    case "jan":
        console.log(`month is ${month}`);
        break;
    case "feb":
        console.log(`month is ${month}`);
        break;
    case "mar":
        console.log(`month is ${month}`);
        break;
    case "apr":
        console.log(`month is ${month}`);
        break;
    default:
        console.log("default case match");
        break;
}

//falsy value
//false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy values
//"0","false"," ",[],{},function(){}

const userEmail=""
if(userEmail){
    console.log("Got user Email");
}else{
    console.log("Don't have user email");
}

if(userEmail.length ===0 ){
    console.log("Array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}


//Nullish Coalescing Operator(??):null undefined

let val1;
// val1=5??10
// val1=null??10
val1=undefined??15
val1=null??10??20

console.log(val1);


//terinary Operator
//condition?true:false

const iceTeaPrice = 100
iceTeaPrice<=80?console.log("less than 80"):console.log("more than 80");

