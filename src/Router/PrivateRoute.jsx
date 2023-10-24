import React, { useContext } from 'react'
import { myContext } from '../Context/AuthContext'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  let {auth}=useContext(myContext);
  if(auth){
     return children //returning the scanQRcomponent
  }else{
    return <Navigate to="/login"/>
  }
  
}

export default PrivateRoute