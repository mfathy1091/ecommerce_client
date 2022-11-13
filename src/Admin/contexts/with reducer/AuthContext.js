import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  token: '',
  user: [],
  isLoggedIn: false,
  
}

export const AuthContext = createContext(INITIAL_STATE);
// (1) create AuthContext and AuthReducer
// (2) combine the context and reducer through having AuthProvider

export const AuthProvider = ({ children }) => {   
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

  // return provider
  return (
    // (3) put the state values you need to share + the reducer action
    // (4) put children so all of them have acess to (AuthReducer, INITIAL_STATE)
    <AuthContext.Provider
      value={{
        token: state.token,
        user: state.user,
        isLoggedIn: state.isLoggedIn,
        dispatch,
      }}
    >
      {children}  
    </AuthContext.Provider>
  )
}   