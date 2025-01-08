/* let input = [10,11,12]

let output = input.filter((value, i)=>{
    if(value === 10 || value ===12){
        return true
    }else{
        return false
    }
})

console.log(output); */

let input = [10,11,12,3,4,6,5,88,7]

let output = input.filter((value, i)=>{
    if(value%2===0){
        return true
    }else{
        return false
    }
})

console.log(output);//[10,12,4,6,88]
