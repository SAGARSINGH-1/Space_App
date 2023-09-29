import { useState } from 'react'
import Navbar from './Components/Header/Navbar'
import {Outlet} from 'react-router-dom'


function App() {
  return (
    <div className='p-[1px] bg-[url(/src/imgAssests/home/home-bg.jpg)] bg-cover h-[100vh] text-white'>
      <Navbar/>
      <Outlet/>
      </div>
  )
}

export default App
