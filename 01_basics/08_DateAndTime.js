let myDate = new Date();
// console.log(myDate);
// console.log(typeof myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2024, 7, 25);
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2024, 7, 25, 8, 36);
// console.log(myCreatedDate);
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2024-7-25");
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("07-25-2024");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

let day=newDate.toLocaleString('default',{
    weekday: "long",
})

console.log(day);







