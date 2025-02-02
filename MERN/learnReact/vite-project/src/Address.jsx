import React from 'react'

const Address = ({country, municipality, province}) => {
  return (
    <div>
        
        <p style={{color: "red", backgroundColor: "green"}}>Country: {country}</p>
        <p style={{backgroundColor: "yellow"}}>Municipality:{municipality}</p>
        <p style={{backgroundColor: "blue"}}>Province: {province}</p>

    </div>
  )
}

export default Address