import React from 'react'
import { useParams } from 'react-router-dom'

const JobUpdate = () => {
    let params = useParams();
    console.log(params);
    
  return (
    <div>Job Update page</div>
  )
}

export default JobUpdate