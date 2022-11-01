import { FaRoad } from 'react-icons/fa'
import axios from '../api/axios'
import useAuth from './useAuth'

const useRefreshToken = () => {
  const { setAuth, setCurrentUser } = useAuth();

  const refresh = async () => {
    const res = await axios.get('/refresh-token', {
      // to allow the request sending along the cookie that contains the refreshToken
      withCredentials: true 
    });

    setAuth(prev => {
      console.log(JSON.stringify(prev));
      console.log(res.data.accessToken);
      // overrider the auth State by replacing the accessToken field
      return { 
        ...prev, 
        accessToken: res.data.accessToken,
      }
    })
    setCurrentUser(prev => {
      console.log(JSON.stringify(prev));
      console.log(res.data.accessToken);
      // overrider the authSatate by replacing the accessToken field
      return { 
        ...prev, 
        username: res.data.user.username,
        fullName: res.data.user.fullName,
        email: res.data.user.email,
        avatarUrl: res.data.user.avatarUrl
      }
    })
    return res.data.accessToken
  }


  return refresh
}

export default useRefreshToken