import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const MyNavLinkTask = () => {
    let navigate = useNavigate();
  return (
    <div>
        <NavLink to="/job" style={{marginRight: "10px"}}>Job</NavLink>
        <NavLink to="/job/create" style={{marginRight: "10px"}}>Job Create</NavLink>

        <NavLink to="/employee" style={{marginRight: "10px"}}>Employee</NavLink>
        <NavLink to="/employee/create" style={{marginRight: "10px"}}>Employee Create</NavLink>

        <NavLink to="/user" style={{marginRight: "10px"}}>User</NavLink>
        <NavLink to="/user/create" style={{marginRight: "10px"}}>User Create</NavLink>
    </div>
  )
}

export default MyNavLinkTask