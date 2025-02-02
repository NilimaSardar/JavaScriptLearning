import React, { useState } from 'react'

const LearnUseState1 = () => {
    let [name, setName] = useState("nilima");
    let [age, setAge]= useState(23);
  return (
    <div>
        <p>my name is {name}</p>
        <p>i am {age}</p>
        <button onClick={(e)=>{
            setName("Ram");
        }}>Change Name</button><br/><br />
        <button onClick={(e)=>{
            setAge(25);
        }}>Change Age</button>
    </div>
  )
}

export default LearnUseState1