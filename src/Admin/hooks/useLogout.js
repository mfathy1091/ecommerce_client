import axios from "../api/axios";
import useAuth from "./useAuth";

const useLogout = () => {
  const { setAccessToken, setCurrentUser, setIsLoggedIn } = useAuth();

  const logout = async () => {
    setAccessToken('');
    setCurrentUser({});
    setIsLoggedIn(false);
    try {
      const res = await axios.post('auth/logout', {
        withcredentials: true // to send the jwt cookie with the request
      })
    } catch (err){
      console.log(err);
    }
  }
  return logout;
}

export default useLogout