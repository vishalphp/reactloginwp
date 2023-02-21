import React from 'react'
import { Link } from 'react-router-dom'

export default function Editor() {
  return (
    <>
    <div>Editor</div>
    <Link to="/login" >Login</Link>
    <Link to="/" >Home</Link>
    <Link to="/register">Register</Link>
    <Link to="/editor">Editor</Link>
    <Link to="/admin">Admin</Link>
    </>
  )
}
