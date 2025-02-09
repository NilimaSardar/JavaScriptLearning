import React from 'react'
import { Route, Routes } from 'react-router'
import Product from './product/Product'
import ProductDetail from './product/ProductDetail'
import ProductUpdate from './product/ProductUpdate'
import ProductCreate from './product/ProductCreate'

const MyRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/product' element={<Product/>}></Route>
            <Route path='/product/:id' element={<ProductDetail/>}></Route>
            <Route path='/product/update/:id' element={<ProductUpdate/>}></Route>
            <Route path='/product/create/' element={<ProductCreate/>}></Route>
        </Routes>
    </div>
  )
}

export default MyRoute