import React from 'react'
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import useRefershToken from '../hooks/useRefershToken'
import useAuth from '../hooks/useAuth'

const PrisistLogin = () => {

    const [isLogin, SetIsLogin] = useState(true);
    const referh = useRefershToken();
    const {auth} = useAuth();

    useEffect(()=>{

        const varifyAccessToken = async()=>{

            try{
                await referh();
            }catch(error){
              console.error(error);
            } finally{
                SetIsLogin(false)
            }


        }
        !auth.accessToken ?  varifyAccessToken() : SetIsLogin(false);
    },[]);



  return (
    <>
     {isLogin ? <p>loading</p> : <Outlet /> }
     </>
  )
}

export default PrisistLogin;