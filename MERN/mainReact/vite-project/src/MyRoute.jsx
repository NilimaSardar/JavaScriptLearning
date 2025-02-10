import React from 'react'
import { Route, Routes } from 'react-router'
import Product from './product/Product'
import ProductDetail from './product/ProductDetail'
import ProductUpdate from './product/ProductUpdate'
import ProductCreate from './product/ProductCreate'
import User from './User/User'
import UserDetail from './User/UserDetail'
import UserUpdate from './User/UserUpdate'
import UserCreate from './User/UserCreate'

const MyRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/product' element={<Product/>}></Route>
            <Route path='/product/:id' element={<ProductDetail/>}></Route>
            <Route path='/product/update/:id' element={<ProductUpdate/>}></Route>
            <Route path='/product/create/' element={<ProductCreate/>}></Route>

            <Route path='/user' element={<User/>}></Route>
            <Route path='/user/:id' element={<UserDetail/>}></Route>
            <Route path='/user/update/:id' element={<UserUpdate/>}></Route>
            <Route path='/user/create/' element={<UserCreate/>}></Route>
        </Routes>
    </div>
  )
}

export default MyRoute