import React from 'react'
import { Link } from 'react-router-dom'
import Users from './Users'

export default function Admin() {
  return (
    <>
    <div>Admin</div>
    
    <Link to="/login" >Login</Link>
    <Link to="/" >Home</Link>
    <Link to="/register">Register</Link>
    <Link to="/editor">Editor</Link>
    <Link to="/admin">Admin</Link>
 
    </>

  )
}
