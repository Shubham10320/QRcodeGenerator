import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import ScanQRcode from '../Pages/ScanQRcode'
import TextQRcode from '../Pages/TextQRcode'
import UrlQRcode from '../Pages/UrlQRcode'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
  return (
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<Login />}/>
       <Route path='/signup' element={<Register />}/>
       {/* <Route path='/scanqr' element={<ScanQRcode />}/> */}
       <Route path='/scanqr' element={<PrivateRoute><ScanQRcode /></PrivateRoute>}/>
       <Route path='/textqr' element={<TextQRcode />}/>
       <Route path='/urlqr' element={<UrlQRcode/>}/>
    </Routes>
  )
}

export default AllRoutes