import React from 'react'
import { useParams } from 'react-router-dom'

const JobDetail = () => {
    let params = useParams();
    console.log(params);
    
  return (
    <div>Job Detail Page</div>
  )
}

export default JobDetail