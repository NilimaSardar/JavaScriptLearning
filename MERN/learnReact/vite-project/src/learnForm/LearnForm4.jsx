import React, { useState } from 'react'

const LearnForm4 = () => {

        let [name, setName] = useState("");
        let [price, setPrice] = useState("");
        let [quantity, setQuantity] = useState("");
    
        const handleSubmit = (e)=>{
            e.preventDefault();
    
            let product = {
                name: name,
                price: price,
                quantity: quantity,
            };
    
            console.log(product);
            
        }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <label htmlFor="">Name</label>
                    <input 
                        type="text" 
                        value={name}
                        onChange={(e)=>{
                            setName(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="">price</label>
                    <input type="number" 
                        value={price}
                         onChange={(e)=>{
                            setPrice(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="">quantity</label>
                    <input type="text" 
                        value={quantity}
                        onChange={(e)=>{
                            setQuantity(e.target.value)
                        }}
                    />
                </div>
            </div>
            <div>
                <button>Create</button>
            </div>
        </form>
    </div>
  )
}

export default LearnForm4