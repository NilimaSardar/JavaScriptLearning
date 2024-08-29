// var c = 300
// let a = 300

// if(true){
//     let a=10
//     const b=20
//     console.log("INNER: ",a);
// }
// console.log(a);
// // console.log(b);//error
// console.log(c);


// //Nested scope
// function one(){
//     const username = "Nilima";
//     function two(){
//         const website = "youtube";
//         console.log(username);   
//     }
//     //console.log(website);//error
//     two()
// }

// one()

// if(true){
//     const username = "Nilima";
//     if(username === "nilima"){
//         const website = "youtube";
//         console.log(username);   
//     }
//     //console.log(website);//error
// }
// console.log(username);//error



//I N T E R E S T I N G
console.log(addone(5));
function addone(num){
    return num + 1
}

// console.log(addtwo(5));//error
const addtwo = function(num){
    return num + 2
}
console.log(addtwo(5));
