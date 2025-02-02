import React, { useState } from 'react'

const LearnUseState4 = () => {
    let [isMarried, setIsMarried] = useState(false);
  return (
    <div>
        <p>married status is {isMarried===true?"yes":"no"}</p>
    </div>
  )
}

export default LearnUseState4