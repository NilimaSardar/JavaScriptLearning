import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Job from './Job'
import JobUpdate from './JobUpdate'
import JobCreate from './JobCreate'
import JobDetail from './JobDetail'

const MyRouteTask = () => {
  return (
    <div>
        <Routes>
            <Route path='/job/create' element={<JobCreate/>}></Route>
            <Route path='/job/:id' element={<JobDetail/>}></Route>
            <Route path='/job' element={<Job/>}></Route>
            <Route path='/job/update/:id' element={<JobUpdate/>}></Route>
        </Routes>
    </div>
  )
}

export default MyRouteTask