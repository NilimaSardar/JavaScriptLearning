import React, { useState } from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'

const ProductCreate = () => {

    let [name, setName] = useState("");
    let [price, setPrice] = useState("");
    let [quantity, setQuantity] = useState("");
    let [description, setDescription] = useState("");

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
                url : "http://localhost:8000/product",
                method: "POST",
                data: data,
            });
            toast.success(result.data.message)
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
                <button>Create</button>
            </div>
        </form>
    </div>
  )
}

export default ProductCreate