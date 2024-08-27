const mySym = Symbol("Key1");

const myIntro ={
    name : "nilima",
    "full name" : "Nilima Sardar",
    age : 22,
    [mySym] : "keyNum",
    address : "Biratnagar",
    email : "nilima@google.com",
    isLogIn : false,
    loginDay : ["Sunday","Friday"]
}


/**************Access Object's Value***************/

// console.log(myIntro);
// console.log(myIntro.isLogIn);
// console.log(myIntro["isLogIn"]);
// console.log(typeof myIntro["isLogIn"]);

// console.log(myIntro["full name"]);
// console.log(typeof myIntro["full name"]);

// console.log(myIntro[mySym]);
// console.log(typeof myIntro[mySym]);



/**************Change Object's Value***************/
// console.log(myIntro["name"]);
// myIntro.name = "Ram";
myIntro["name"]= "Ram";
// console.log(myIntro["name"]);

// myIntro["gender"] = "male";
myIntro.gender = "female"
console.log(myIntro.gender);


//Object.freeze(myIntro);//restrict to change the object
myIntro["name"]= "Shyam";
// console.log(myIntro);

myIntro.greeting = function () {
    console.log("Hello JS user");
}
myIntro.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`);
}
// console.log(myIntro.greetingTwo());


