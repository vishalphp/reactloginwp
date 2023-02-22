import {useEffect} from 'react'
import { privateAxios } from '../api/axios';
import useRefershToken from './useRefershToken';
import useAuth from './useAuth';

const useAxiosPrivate = () => {
  const refreshToken = useRefershToken();
  const {auth} = useAuth();

    console.log("file running...");

    useEffect(()=>{
        //request
        const requestIntercept = privateAxios.interceptors.request.use(
            (config)=>{
                  if(!config.headers['Authorization']){
                    config.headers['Authorization'] =  `Bearer ${auth.accessToken}`;
                  }
                  return config;
            }, (error)=>{
                return Promise.eject(error);
            }
        );

        //post
        const responseIntercept = privateAxios.interceptors.response.use(
            (response)=>{
                  return response
            }, async(error)=>{

                const previousConfig = error.config;

                if(error?.response?.status === 403 || !previousConfig.sent){
                    previousConfig.sent = true;
                    console.log("here 2");
                    const newaccessToken = await refreshToken();
                    //console.log(newaccessToken);
                    previousConfig.headers['Authorization'] =  `Bearer ${newaccessToken}`;
                    return privateAxios(previousConfig);
                }
                console.log("here 3");
              return Promise.reject(error);
            }
        );

        return ()=>{
            privateAxios.interceptors.request.eject(requestIntercept);
            privateAxios.interceptors.response.eject(responseIntercept);
            console.log("here 4");
        }

    },[auth, refreshToken]);

     return privateAxios;

}

export default useAxiosPrivate;
