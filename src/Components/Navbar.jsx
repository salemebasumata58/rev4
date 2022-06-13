import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div >
        <Link style={{margin:"10px"}} to="/">Home</Link>
        <Link style={{margin:"10px"}}to="/company">Company</Link>
        <Link style={{margin:"10px"}}to="/employee">Employee</Link>
    </div>
  )
}
