/* 
make a arrow function
named is18 it takes one input
it must return true if age is 18
else return false
 */


let is18 = (input)=>{
    if(input === 18){
        return true;
    }else{
        return false;
    }
}

console.log(is18(19));
console.log(is18(18));
console.log(is18(20));
