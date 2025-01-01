/* 
make a arrow function  named
canVote
it takes one input
it must return true  if  input is greater or equal to 18
else return false 
*/

let canVote = (input)=>{
    if(input>=18){
        return true
    }else{
        return false
    }
}

console.log(canVote(10));
