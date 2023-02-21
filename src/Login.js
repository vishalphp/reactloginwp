import React,{useRef, useState} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import axios from './api/axios';
import useAuth from './hooks/useAuth';
const LOGIN_URL = '/wp-json/jwt-auth/v1/token';

export default function Login() {
    const { setAuth } = useAuth();
    const userNameref = useRef();
    const passwordRef = useRef();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";

    const [user, setUser] = useState();
    const [pwd, setPwd] = useState();
    //const [success, setSuccess] = useState(false);

    const submitLogin = async(e) =>{
      e.preventDefault();
//https://wordpress.stackexchange.com/questions/299542/how-to-make-jwt-authenticated-requests-to-the-wordpress-api

      try{

          const response = await axios.post(LOGIN_URL, 
            JSON.stringify({username: user, password: pwd }),
            {
                headers: {
                    'Content-Type':'application/json',
                    // withCredentials: true
                    }
            }            
            );
            
            const accessToken =  response?.data?.token;
            const roles = response?.data.role; 

            setAuth({user, pwd, roles, accessToken });
          
            navigate(from, {replace: true});
            //setSuccess(true);

      }catch(err){
        console.error(err);
     }

    }

  return (
    <>
    {/* success ? 
    <h1>You are logged in</h1> : */}
    <div>Login</div>
    <form onSubmit={submitLogin} >
    <input type="text" name='username' id="username" ref={userNameref} onChange={(e)=> setUser(e.target.value)} />
    <br/> <br/>
    <input type="password" name='password' id="password" ref={passwordRef} onChange={(e)=> setPwd(e.target.value)}/>
    <br/> <br/>
    <input type="submit" name="submit" value="submit" />
    </form>
    </>
  )
}
