import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import DestinationMoon from './Components/Destination/DestinationMoon.jsx'
import Navbar from './Components/Header/Navbar'
import Crew01 from './Components/Crew/Crew01.jsx'
import Home from './Components/Home.jsx'
import DestinationTitan from './Components/Destination/DestinationTitan.jsx'
import Error  from './Components/Error.jsx'
import Tech01 from './Components/Technology/Tech01.jsx'
import DestinationEuropa from './Components/Destination/DestinationEuropa.jsx'
import DestinationMars from './Components/Destination/DestinationMars.jsx'
import Tech02 from './Components/Technology/Tech02.jsx'
import Tech03 from './Components/Technology/Tech03.jsx'
import Crew02 from './Components/Crew/Crew02.jsx'
import Crew03 from './Components/Crew/Crew03.jsx'
import Crew04 from './Components/Crew/Crew04.jsx'

let src='src/imgAssests/technology/tech-bg.jpg';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App />}>
      <Route path='' element={<Home img={src} />}/>
      <Route path='' element={<Home  img={src}/>}/>
      <Route path='destination/moon' element={<DestinationMoon img={src} />}/>
      <Route path='destination/titan' element={<DestinationTitan img={src}/>} />
      <Route path='destination/europa' element={<DestinationEuropa img={src}/>} />
      <Route path='destination/mars' element={<DestinationMars img={src}/>} />
      <Route path='crew' element={<Crew01 img={src}/>} />
      <Route path='crew/crew02' element={<Crew02 img={src}/>} />
      <Route path='crew/crew03' element={<Crew03 img={src}/>} />
      <Route path='crew/crew04' element={<Crew04 img={src}/>} />
      <Route path='technology' element={<Tech01 img={src}/>} />
      <Route path='technology/tech02' element={<Tech02 img={src}/>} />
      <Route path='technology/tech03' element={<Tech03 img={src}/>} />
      <Route path='*' element={<Error img={src}/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
) 