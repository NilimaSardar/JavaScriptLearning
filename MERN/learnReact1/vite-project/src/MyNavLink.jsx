import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const MyNavLink = () => {
    let navigate = useNavigate();
  return (
    <div>
        <NavLink to="/about" style={{marginRight: "10px"}}>About</NavLink>
        <NavLink to="/contact" style={{marginRight: "10px"}}>Contact</NavLink>
        <NavLink to="/product" style={{marginRight: "10px"}}>Product</NavLink>

        <button onClick={()=>{
            navigate("/login")
        }}>
            Login
        </button>
    </div>
  )
}

export default MyNavLink