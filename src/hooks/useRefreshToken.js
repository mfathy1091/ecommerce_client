import axios from '../api/axios'
import useAuth from './useAuth'
import { useNavigate, useLocation } from 'react-router-dom';

const useRefreshToken = () => {
  const { setAccessToken, setCurrentUser, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const refresh = async () => {
    try {
      const res = await axios.get('/auth/refresh-token', 
      {
        withCredentials: true // to allow the request sending along the cookie that contains the refreshToken
      });

      // after refresh - all states are gone, so re-initiate them
      setAccessToken(prev => {
        console.log(`Expired Token: ${JSON.stringify(prev)}`)
        console.log(`New Token: ${res.data.accessToken}`)
        return res.data.accessToken;
      })
      setCurrentUser(prev => {
        return { 
          ...prev, 
          username: res.data.user.username,
          fullName: res.data.user.fullName,
          email: res.data.user.email,
          avatar: res.data.user.avatar
        }
      })

      setIsLoggedIn(true)

      return res

    } catch (err) {
      console.log(`Error from useRefreshToken: ${err}`)
      if(err.response.status===401){
        navigate('/login', { state: { from: location }, replace: true })
      }     
    }
    
  }


  return refresh
}

export default useRefreshToken