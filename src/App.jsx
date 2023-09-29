import { useState } from 'react'
import Home from './Components/Home'
import DestinationMoon from './Components/Destination/DestinationMoon'
import DestinationMars from './Components/Destination/DestinationMars'
import DestinationEuropa from './Components/Destination/DestinationEuropa'
import DestinationTitan from './Components/Destination/DestinationTitan'
import Crew01 from './Components/Crew/Crew01'
import Crew02 from './Components/Crew/Crew02'
import Crew03 from './Components/Crew/Crew03'
import Crew04 from './Components/Crew/Crew04'
import Navbar from './Components/Header/Navbar'
import {Outlet} from 'react-router-dom'


function App() {
  return (
    <div className='p-[1px] bg-[url(./src/imgAssests/technology/tech-bg.jpg)] bg-cover h-[100vh] text-white'>
      <Navbar/>
      <Outlet/>
      </div>
  )
}

export default App
