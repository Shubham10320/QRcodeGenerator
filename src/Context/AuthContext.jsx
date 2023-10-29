import React, { createContext, useState } from "react";

export const myContext = createContext();

const AuthContext = ({ children }) => {

  const [auth, setAuth] = useState(false);
  const [authPersonDetail, setAuthPersonDetail]=useState({name:'', email:"", mobile:""});
  const loggin = () => {
    setAuth(true);
  };

  return (
    <myContext.Provider value={{ auth, setAuth, setAuthPersonDetail,authPersonDetail, loggin }}>
      {children}
    </myContext.Provider>
  );
};

export default AuthContext;
