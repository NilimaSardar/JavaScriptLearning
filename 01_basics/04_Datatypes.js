//Primitive Datatype(Call by value)

// 7 Types : String, Boolean, Number, null, undefiend, BigInt, Symbol

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);//false

// const bigNumber = 89472836473193748654584659237490275n;
// console.log(typeof bigNumber);


//Non-Primitive Datatype(Reference type)

//Array, Object, Function


//Array
const heros = ["shaktiman","naagraj","doga"];
console.log(typeof heros);//object
console.log(heros);

//Object
let myObj = {
    name :"Nilima",
    age:22
}

console.log(typeof myObj);//object
console.log(myObj);

//Function
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);//function
console.log(myFunction);



