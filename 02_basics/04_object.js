//Singleton Object
const tinderUser = new Object();

tinderUser.id = "123";
tinderUser.name = "nilima";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser={
    email:"N@gmail.com",
    fullname:{
        userfullName:{
            firstname:"Nilima",
            lastname:"Sardar"
        }
    }
}
// console.log(regularUser.fullname.userfullName.firstname);


/***********Merge Objects************/ 

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"a",4:"b"};
const obj3 = {5:"a",6:"b"};

// const obj4 = {obj1,obj2,obj3};
// console.log(obj4);


//Object.assign(target,source)
//all source values goes to target
// const obj4 = Object.assign(obj2,obj3);

//obj2 and obj4 gives same value
// console.log(obj2);
// console.log(obj4);

//best way to use assign()
// const obj4 = Object.assign({},obj1,obj2,obj3);
// console.log(obj4);


// Bestest Practice
// const obj4 = {...obj1,...obj2,...obj3};
// console.log(obj4);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('id'));
// console.log(tinderUser.hasOwnProperty('email'));



const users = [
    {
        id:1,
        email:"N@gmail.com"
    },
    {
        id:2,
        email:"M@gmail.com"
    },
    {
        id:3,
        email:"O@gmail.com"
    },
]

// console.log(users[2].email);




/************Object de-structure************/
const course ={
    coursename :"js",
    price : "999",
    courseInstructor:"nilima"
}

console.log(course.courseInstructor);

const {courseInstructor} = course;
console.log(courseInstructor);

// Giving Customized Name
const {courseInstructor : instructor} = course;
console.log(instructor);

/*********JSON Format**********/ 
// {
//     "name":"nilima",
//     "coursename":"JS",
//     "price":"free"
// }

[
    {},
    {},
    {}
]