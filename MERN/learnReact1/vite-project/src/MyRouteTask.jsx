import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Job from './Job'
import JobUpdate from './JobUpdate'
import JobCreate from './JobCreate'
import JobDetail from './JobDetail'
import EmployeeCreate from './EmployeeCreate'
import EmployeeDetail from './EmployeeDetail'
import Employee from './Employee'
import EmployeeUpdate from './EmployeeUpdate'
import UserCreate from './UserCreate'
import UserDetail from './UserDetail'
import User from './User'
import UserUpdate from './UserUpdate'

const MyRouteTask = () => {
  return (
    <div>
        <Routes>
            <Route path='/job/create' element={<JobCreate/>}></Route>
            <Route path='/job/:id' element={<JobDetail/>}></Route>
            <Route path='/job' element={<Job/>}></Route>
            <Route path='/job/update/:id' element={<JobUpdate/>}></Route>

            <Route path='/employee/create' element={<EmployeeCreate/>}></Route>
            <Route path='/employee/:id' element={<EmployeeDetail/>}></Route>
            <Route path='/employee' element={<Employee/>}></Route>
            <Route path='/employee/update/:id' element={<EmployeeUpdate/>}></Route>

            <Route path='/user/create' element={<UserCreate/>}></Route>
            <Route path='/user/:id' element={<UserDetail/>}></Route>
            <Route path='/user' element={<User/>}></Route>
            <Route path='/user/update/:id' element={<UserUpdate/>}></Route>
        </Routes>
    </div>
  )
}

export default MyRouteTask