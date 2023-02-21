import React from 'react'
import { Link } from 'react-router-dom'
//import useRefershToken from '../hooks/useRefershToken'
import Users from './Users';

export default function Home() {
//const referh = useRefershToken();
 
  return (
    <>
    <div>Home</div>
    <br/>
    <Link to="/login" >Login</Link>
    <br/>
    <Link to="/" >Home</Link>
    <br/>
    <Link to="/register">Register</Link>
    <br/>
    <Link to="/editor">Editor</Link>
    <br/>
    <Link to="/admin">Admin</Link>

<Users />
<br/>
<button>Refersh</button>

    </>
  )
}
