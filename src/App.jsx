import { useState } from 'react'
import { Outlet, useRoutes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import About from './Page/About/About'

function App() {


  return (
    <div className='crimsonFont mx-auto absolute w-full h-full inset-0 -z-10  items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'>
      <Navbar></Navbar>
      <Outlet> </Outlet>
      <Footer></Footer>

    </div>
  )
}

export default App
