/* 
Write a function that takes a temperature value
in celsius and classifies it as follows:

Below 0: "Freeezing"
0 to 20: "cold"
21 to 35: "Warm"
Above 35: "Hot"
Otherwise: "invalid"

*/

let temperature = (value)=>{
    if (value<0){
        return "freezing"
    }else if(value>=0  && value<=20){
        return "cold"
    }else if(value>=21 && value<=35){
        return "Warm"
    }else if(value>35){
        return "Hot"
    }else{
        return "Invalid"
    }
}

console.log(temperature(12))