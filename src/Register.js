import React,{useRef} from 'react'
import axios from './api/axios'

export default function Register() {
  
    const userNameref = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const submitRegister= async(e)=>{
       e.preventDefault();

       const tempObj = {
        username: userNameref.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value
       }

       try{

        const response = await axios.post('wp-json/wp/v2/users/',
        JSON.stringify(tempObj),
            {
                headers: {'Content-Type':'application/json','X-WP-Nonce':'dfsdfdfd'}
            }
            );
            console.log(response);
              // user authentication error 
       }catch(err){
          console.error(err);
       }


    }
  
  
    return (
    <>
    <div>Register</div>
    <form onSubmit={submitRegister} >
    <input type="text" name='username' id="username" ref={userNameref} />
    <br/> <br/>
    <input type="text" name='email' id="email" ref={emailRef} />
    <br/> <br/>
    <input type="password" name='password' id="password" ref={passwordRef}/>
    <br/> <br/>
    <input type="submit" name="submit" value="submit" />
    </form>
    </>
  )
}
