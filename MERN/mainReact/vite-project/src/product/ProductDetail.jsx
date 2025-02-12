import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { toast } from 'react-toastify';

const ProductDetail = () => {
  let [product, setProduct] = useState({});
  let params = useParams();
  let id = params.id;

  const getData = async() =>{
    try {
      let result = await axios({
        url: `http://localhost:8000/product/${id}`,
        method : 'get',
      })
      setProduct(result.data.result)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  useEffect(()=>{
    getData();
  },[])

  return (
    <div>
            <p>Product Name is {product.name}</p>
            <p>Product Price is NRS. {product.price}</p>
            <p>Product Quantity is {product.quantity}</p>
            <p>Product Description is {product.description}</p>
    </div>
  )
}

export default ProductDetail