import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import { useNavigate, useParams } from 'react-router';

const ProductUpdate = () => {

    let [name, setName] = useState("");
    let [price, setPrice] = useState("");
    let [quantity, setQuantity] = useState("");
    let [description, setDescription] = useState("");

    let params = useParams();
    let id=params.id

    let navigate = useNavigate();
  
        const getData = async()=>{
          try {
            let result = await axios({
              url: `http://localhost:8000/product/${id}`,
              method : 'get',
            })

            let data = result.data.result;
            // console.log(data);
            
            setName(data.name);
            setPrice(data.price);
            setQuantity(data.quantity);
            setDescription(data.description);
          } catch (error) {
            toast.error(error.response.data.message)
          }
        }

        useEffect(()=>{
          getData();
        },[])
  
        const handleSubmit = async (e)=>{
          e.preventDefault();//It is used to prevent deafault behaviour i.e refreash page
  
          let data = {
              name : name,
              price : price,
              quantity : quantity,
              description : description
          }
  
          // console.log(data);
  
          //hit api
          try {
              let result = await axios({
                  url : `http://localhost:8000/product/${id}`,
                  method: "patch",
                  data: data,
              });
              console.log(result.data.message);


              
              toast.success(result.data.message)
              setName("");
              setPrice("");
              setQuantity("");
              setDescription("");
              navigate(`/product/${id}`);
          } catch (error) {            
              toast.error(error.response.data.message)
          }
          
  
          
      }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input 
                    type="text" 
                    value={name} 
                    onChange={(e)=>{
                        setName(e.target.value);
                    }} />
                </div>
                <div>
                    <label htmlFor='price'>Price:</label>
                    <input 
                    type="number" 
                    value={price} 
                    onChange={(e)=>{
                        setPrice(e.target.value);
                    }} />
                </div>
                <div>
                    <label htmlFor='quantity'>Quantity:</label>
                    <input 
                    type="number" 
                    value={quantity} 
                    onChange={(e)=>{
                        setQuantity(e.target.value);
                    }} />
                </div>
                <div>
                    <label htmlFor='description'>Description:</label>
                    <input 
                    type="text" 
                    value={description} 
                    onChange={(e)=>{
                        setDescription(e.target.value);
                    }} />
                </div>
            </div>
            <div>
                <button>Update</button>
            </div>
        </form>
    </div>
  )
}

export default ProductUpdate