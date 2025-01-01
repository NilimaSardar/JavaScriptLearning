let input = [10,11,12]

let output = input.filter((value, i)=>{
    if(value === 10 || value ===12){
        return true
    }else{
        return false
    }
})

console.log(output);
