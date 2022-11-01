import React, { createContext, useState } from 'react';


const AuthContext = createContext({});
// (1) create AuthContext and AuthReducer
// (2) combine the context and reducer through having AuthProvider

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // return provider
  return (
    <AuthContext.Provider value={{ auth, setAuth, currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn }}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthContext;