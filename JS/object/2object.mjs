let fatherInfo ={
    name: "Ram",
    surname: "BK",
    age: 70,
}

//get object property
console.log(fatherInfo);
console.log(fatherInfo.name);

//change object property
fatherInfo.age = 80;
console.log(fatherInfo);

//delete object property
delete fatherInfo.surname;
console.log(fatherInfo);

//add new property
fatherInfo.children = "XYZ";
console.log(fatherInfo);



