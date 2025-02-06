import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Product from './Product'
import Login from './Login'
import DynamicProduct from './DynamicProduct'

const MyRoute = () => {
    //attach page with url
    // location:5173/about => About Page
  return (
    <div>
        <Routes>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/product/item1" element={<Product/>}></Route>
            <Route 
              path="/product/:id" 
              element={<DynamicProduct/>}>
            </Route>
            <Route path="/login" element={<Login/>}></Route>
        </Routes>
    </div>
  )
}

export default MyRoute