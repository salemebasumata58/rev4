import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Company } from '../Pages/Company'
import { Employee } from '../Pages/Employee'
import { Home } from '../Pages/Home'
import { Navbar } from './Navbar'

export const AllRoutes = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/company' element={<Company/>}></Route>
            <Route path='/employee' element={<Employee/>}></Route>
        </Routes>
    </div>
  )
}
