import React, { useState } from 'react'
import Home from './Pages/Home'
import AllRoutes from './Router/AllRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AllRoutes/>
    </>
  )
}

export default App
