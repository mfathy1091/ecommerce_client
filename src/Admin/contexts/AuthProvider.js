import React, { createContext, useState } from 'react';


const AuthContext = createContext({});
// (1) create AuthContext and AuthReducer
// (2) combine the context and reducer through having AuthProvider

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState();
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [persist, setPersist] = useState(JSON.parse(localStorage.getItem('persist')) || false);

  // return provider
  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken, currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn, persist, setPersist }}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthContext;