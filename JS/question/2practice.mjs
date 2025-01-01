let category = (age) =>{
    if(age >= 0 && age <= 18){
        return "Underage"
    }else if(age>=19 && age <= 60){
        return "Adult"
    }else if(age>=61 && age<=150){
        return "Old"
    }else{
        return "None"
    }
}

console.log(category(100))