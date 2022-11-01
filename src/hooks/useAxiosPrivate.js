import { axiosPrivate } from "../api/axios"
import { useEffect } from "react"
import useRefreshToken from "./useRefreshToken"
import useAuth from "./useAuth"


// attach iterceptors to req and res of privateAxios instance
const useAxiosPrivate = () => {
  const refreshToken = useRefreshToken();
  const { auth } = useAuth();

  
  useEffect(() => {
    /* (1) If it was the first attempt, Authorization header will not be existent
      then, grab the accessToken from the auth state, which was set either during login or after a refersh */
    const requestIntercept = axiosPrivate.interceptors.request.use(
      config => {
        if(!config.headers['Authorization']){
          config.headers['Authorization'] = `Bearer ${auth?.accessToken}`
        }
        // finally return
        return config;
      }, (error) => Promise.reject(error)
    )

    /* (2) if headers['Authorization'] is SET, then, it is a retry after a 401 (accesToken EXPIRED), 
     and we need to refresh the token */
    const responseIntercept = axiosPrivate.interceptors.response.use(
      // a) if no error (accesToken VALID) return the response
      response => response, 

      // b) if error 401 (accesToken EXPIRED), attach a new one
      async (error) => { 
        // get the previous effect
        const prevRequest = error?.config;
        // check it was failed due to EXPIRED accessToken 
        // and if the sent property is FALSE 
        if (error?.response?.status === 401 && !prevRequest?.sent) {
          // set the sent to TRUE - to prevent infinite loop of 401 and make this check runs once only
          prevRequest.sent = true; 
          const newAccessToken = await refreshToken();
          prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          // add the token to the axiosPrivate
          return axiosPrivate(prevRequest);
        }
        // finally return wetheer error is not 401 or not
        return Promise.reject(error)
      }
    )
    // (2) cleanup function - remove the interceptors, otherwise interceptors can pile up
    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    }
  }, [auth, refreshToken]) // attach them whenever the auth changes or refreshToken() is called


  return axiosPrivate
}

export default useAxiosPrivate