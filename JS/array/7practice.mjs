// let name = "nilima";
// // let capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
// let capitalizedName = name.toUpperCase();
// console.log(capitalizedName); // Output: "Nilima"

let input=["n","i","l","i","m","a"]

let firstLetterCapital1 = input.map((value, i)=>{
    if(i===0){
        return value.toUpperCase();
    }else{
        return value.toLowerCase()
    }
})

console.log (firstLetterCapital1) ;


let name ="nilima"

let nameArray=name.split("")
console.log(nameArray);

let makingFirstCapital = nameArray.map((value,i)=>{
    if(i===0){
        return value.toUpperCase()
    }else{
        return value.toLowerCase()
    }
})
console.log(makingFirstCapital);


let finalOutput = makingFirstCapital.join("")
console.log(finalOutput);
