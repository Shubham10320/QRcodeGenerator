import React, { useState } from 'react'
import Home from './Pages/Home'
import AllRoutes from './Router/AllRoutes'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar/>
      <AllRoutes/>
   
    </>
  )
}

export default App
