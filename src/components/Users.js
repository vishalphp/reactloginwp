import React, {useState, useEffect} from 'react'
import useAuth from '../hooks/useAuth'
import { privateAxios } from '../api/axios';

export default function Users() { 

    const [users, setUsers] = useState();
    const { auth} = useAuth();

    useEffect(()=>{
    
      let isMounted = true;
      const abortController = new AbortController();

      const getUsers = async() =>{
           
              try{
               const resp = await privateAxios.get('wp-json/wp/v2/users',{
                    signal: abortController.signal,
                    headers: {
                      'Content-Type':'application/json', 
                      'Authorization': `Bearer ${auth.accessToken}`
                      //// withCredentials: true
                      }
               });
          
                //console.log(resp);
               isMounted && setUsers(resp.data);
              }catch(error){
                 console.log(error);
              }

      }

    getUsers();

    return()=>{
      isMounted = false;
      abortController.abort();
    }


    },[]);


  return (
    <>
    <div>Users</div>
    { users?.length 
       ? (
        <ul>
            {
                users.map((user, i)=> <li key={i} >{user?.name}</li>)
            }
        </ul>
         ) : <p>No users found to display</p>
    }
    </>
    
  )
}
