import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { toast } from 'react-toastify';

const UserDetail = () => {
  let [user, setUser] = useState({});
  let params = useParams();
  let id = params.id;

  const getData = async() =>{
    try {
      let result = await axios({
        url: `http://localhost:8000/user/${id}`,
        method : 'get',
      })
      setUser(result.data.result)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  useEffect(()=>{
    getData();
  },[])

  return (
    <div>
      <p>User Name is {user.name}</p>
      <p>User Email is NRS. {user.email}</p>
      <p>User Password is {user.password}</p>
      <p>User Age is {user.age}</p>
      <p>User married is {user.isMarried}</p>
      <p>User Gender is {user.gender}</p>
    </div>
  )
}

export default UserDetail