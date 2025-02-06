import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const MyNavLinkTask = () => {
    let navigate = useNavigate();
  return (
    <div>
        <NavLink to="/job" style={{marginRight: "10px"}}>Job</NavLink>
        <NavLink to="/job/create" style={{marginRight: "10px"}}>Job Create</NavLink>
    </div>
  )
}

export default MyNavLinkTask