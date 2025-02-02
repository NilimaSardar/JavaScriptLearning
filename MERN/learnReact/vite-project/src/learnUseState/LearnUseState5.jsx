import React, { useState } from 'react'

const LearnUseState5 = () => {

    let [show, setShow] = useState();

  return (
    <div>
        {show?<p>Nilima Sardar</p>:null}

        <button onClick={(e)=>{
            setShow(true);
        }}>show</button>

        <button onClick={(e)=>{
            setShow(false);
        }}>hide</button>
    </div>
  )
}

export default LearnUseState5