import { useState } from 'react'
import { Outlet, useRoutes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import About from './Page/About/About'

function App() {


  return (
    <div>
      <Navbar></Navbar>
      <Outlet> </Outlet>
      <Footer></Footer>

    </div>
  )
}

export default App
