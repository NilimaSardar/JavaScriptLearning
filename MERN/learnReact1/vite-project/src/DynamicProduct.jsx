import React from 'react'
import { useParams } from 'react-router-dom'

const DynamicProduct = () => {

    let params = useParams();
    console.log(params);
    

  return (
    <div>DynamicProduct</div>
  )
}

export default DynamicProduct