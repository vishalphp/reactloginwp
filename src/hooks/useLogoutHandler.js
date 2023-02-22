import axios from "../api/axios";
import useAuth from "./useAuth";

const useLogoutHandler = () => {

    const {setAuth} = useAuth();

    const logout = async() =>{
        setAuth({});
        try{
            const responce = await axios('/wp-json/wpoauthserver/v1/logout/',{
                headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'}
            }
            );

        }catch(error){
          console.error(error);
        }

    }

    return logout;

}

export default useLogoutHandler;