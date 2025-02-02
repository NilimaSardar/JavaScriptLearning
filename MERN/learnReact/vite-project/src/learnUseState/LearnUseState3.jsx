import React, { useState } from 'react'

const LearnUseState3 = () => {
    let [count, setCount] = useState(1);
  return (
    <div>
        <p>count is {count}</p>
        <button onClick={(e)=>{
            setCount(count + 1);
        }}>Increment</button>
        <button onClick={(e)=>{
            setCount(count - 1)
        }}>Decrement</button>
    </div>
  )
}

export default LearnUseState3