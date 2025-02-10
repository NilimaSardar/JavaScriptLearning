import React from 'react'
import { NavLink } from 'react-router'

const MyNavLink = () => {
  return (
    <div>
        <NavLink to="product" style={{marginRight: "20px"}}>Product</NavLink>
        <NavLink to="product/create" style={{marginRight: "20px"}}>Product Create</NavLink>

        <NavLink to="user" style={{marginRight: "20px"}}>User</NavLink>
        <NavLink to="user/create" style={{marginRight: "20px"}}>User Create</NavLink>
    </div>
  )
}

export default MyNavLink