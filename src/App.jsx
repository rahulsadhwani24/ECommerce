import React from 'react'
import Header from './Components/Header'
import { Outlet } from 'react-router'

function App() {
  return (
    <>
    <Header />
    <div className='main'>
    <Outlet />
    </div>
    </>
  )
}

export default App