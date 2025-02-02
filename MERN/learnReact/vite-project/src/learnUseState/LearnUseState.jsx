import React, { useState } from 'react'

const LearnUseState = () => {

    // let address = "Brt";

    let [address, setAddress] = useState("brt");
    let [name, setName] = useState("nilima");
    let [surname, setSurName]= useState("Sardar");
    let [age, setAge]=useState(20);
  return (
    <div>
        <p>I live in {address}</p>
        <p>i am {name} {surname}</p>
        <p>age: {age}</p>

        <button onClick={(e)=>{
            console.log("button is clicked");
            
        }}>Click me</button>
    </div>
  )
}

export default LearnUseState