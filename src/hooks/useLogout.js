import axios from "../api/axios";
import useAuth from "./useAuth";

const useLogout = () => {
  const { setAuth, setCurrentUser } = useAuth();

  const logout = async () => {
    setAuth({});
    setCurrentUser({});
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