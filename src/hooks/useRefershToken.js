import axios from '../api/axios'
import useAuth from './useAuth'

const refrshAPI = '/wp-json/jwt-auth/v1/token'

 const useRefershToken = () => {

    const { auth, setAuth } = useAuth();

    const refersh = async() =>{
 
        console.log(auth);
 
        const response = await axios.post(refrshAPI, 
            JSON.stringify({username: auth.user, password: auth.pwd }),{
            //withCredentials: true 
            headers: {
                'Content-Type':'application/json', 
               // Authorization: `Bearer ${auth.accessToken}`
                // withCredentials: true
                }
           
        });

        setAuth((prev)=>{ 
            return {
                     ...prev,
                     token: response?.data?.token}
        })
       return response?.data?.token;
    }

  return refersh;
}

export default useRefershToken;