import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
//import useRefershToken from '../hooks/useRefershToken'
import Users from './Users';
import useLogoutHandler from '../hooks/useLogoutHandler';

export default function Home() {
//const referh = useRefershToken();

const loguot = useLogoutHandler();
const navigate = useNavigate();

const logutHandel = async() =>{
  await loguot();
  navigate('/login');
}
 
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
    <br/>
    <Link to="/users">Users</Link>
   
    <br/>
    <button onClick={logutHandel}>Sign Out</button>

<br/>
<button>Refersh</button>

    </>
  )
}
