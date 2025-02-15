import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

const User = () => {
  let [users, setUsers] = useState([]);
  let navigate = useNavigate();

  //hit api on page load
  //api give data
  //set that data to products

  const getData = async () =>{
    try {
      let result = await axios({
        url: "http://localhost:8000/user",
        method: "get",
      });
      setUsers(result.data.result);
      
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
      {users.map((item,i)=>{
        return(
          <div style={{border: "1px solid black", marginBottom: "20px"}}>
            <p>User Name is {item.name}</p>
            <p>User Email is NRS. {item.email}</p>
            <p>User Password is {item.password}</p>
            <p>User Age is {item.age}</p>
            <p>User married is {item.isMarried}</p>
            <p>User Gender is {item.gender}</p>

            <button 
              onClick={()=>{
                navigate(`/user/${item._id}`);
              }}
            >View</button>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        )
      })}
    </div>
  )
}

export default User