import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refreshToken = useRefreshToken();
  const { accessToken, persist } = useAuth();



  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        // when reload the page - if the refreshToken is valid, it will send back an accessToken
        await refreshToken();
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }

    /* run this when accessToken is empty - 
    to avoid hitting the refresh endpoint 
    each time we visit a protect page that needs accessToken */
    !accessToken ? verifyRefreshToken() : setIsLoading(false); // set iSloading to false incase you do not calling the verify function
  }, [])


  return (
    <>
      {!persist 
        ? <Outlet />
        : isLoading  
          ? <p>Loading...</p> 
          : <Outlet />
      }
    </>
  )

}

export default PersistLogin