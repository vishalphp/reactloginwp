import React, {useEffect} from 'react'
import { privateAxios } from '../api/axios';
import useRefershToken from './useRefershToken';
import useAuth from './useAuth';

const useAxiosPrivate = () => {
  
    const refreshToken = useRefershToken();
    const {auth} = useAuth();

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

                if(error.response.status === 403 || !previousConfig.sent){
                    previousConfig.sent = true;

                    const newaccessToken = await useRefershToken();
                    previousConfig.headers['Authorization'] =  `Bearer ${newaccessToken}`;
                    return privateAxios(previousConfig);
                }
              return Promise.reject(error);
            }
        );

        return ()=>{
            privateAxios.interceptors.request.eject(requestIntercept);
            privateAxios.interceptors.response.eject(responseIntercept);
        }

    },[auth, refreshToken]);

     return axiosPrivate;

}

export default useAxiosPrivate;
