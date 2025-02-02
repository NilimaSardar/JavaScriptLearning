import React from 'react'

const Info = ({fatherName, address, age}) => {
  return (
    <div>
        <p>My father name is {fatherName}</p>
        <p>He lives in {address}</p>
        <p>His age is {age}</p>
    </div>
  )
}

export default Info