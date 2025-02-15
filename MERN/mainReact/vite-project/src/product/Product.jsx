import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

const Product = () => {
  let [products, setProducts] = useState([]);
  let navigate = useNavigate();

  //hit api on page load
  //api give data
  //set that data to products

  const getData = async () =>{
    try {
      let result = await axios({
        url: "http://localhost:8000/product",
        method: "get",
      });
      setProducts(result.data.result);
      
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  
  useEffect(()=>{
    getData();
  },[])

  // let products = [
  //   {name: "laptop", price: 100000, quantity: 10, description: "good"},
  //   {name: "tv", price: 100000, quantity: 2, description: "bad"},
  //   {name: "mobile", price: 100000, quantity: 3, description: "very good"},
  // ];
  return (
    <div>
      {products.map((item,i)=>{
        return(
          <div style={{border: "1px solid black", marginBottom: "20px"}}>
            <p>Product Name is {item.name}</p>
            <p>Product Price is NRS. {item.price}</p>
            <p>Product Quantity is {item.quantity}</p>
            <p>Product Description is {item.description}</p>

            <button 
              onClick={()=>{
                navigate(`/product/${item._id}`);
              }}
            >View</button>
            <button
              onClick={()=>{
                navigate(`/product/update/${item._id}`);
              }}
            >Edit</button>
            <button
              onClick ={async()=>{
                
                try {
                  let result = await axios({
                    url: `http://localhost:8000/product/${item._id}`,
                    method: "delete",
                  });
                  toast.success(result.data.message);
                  getData();
                } catch (error) {
                  toast.error(error.response.data.message);
                }

              }}
            >Delete</button>
          </div>
        )
      })}
    </div>
  )
}

export default Product