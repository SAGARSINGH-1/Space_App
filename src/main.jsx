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

let src='src/imgAssests/technology/tech-bg.jpg';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App />}>
      <Route path='' element={<Home />}/>
      <Route path='' element={<Home />}/>
      <Route path='destination' element={<DestinationMoon />}/>
      <Route path='destination/moon' element={<DestinationMoon />}/>
      <Route path='destination/titan' element={<DestinationTitan/>} />
      <Route path='destination/europa' element={<DestinationEuropa/>} />
      <Route path='destination/mars' element={<DestinationMars/>} />
      <Route path='/crew' element={<Crew01/>} />
      <Route path='technology' element={<Tech01/>} />
      <Route path='technology/tech02' element={<Tech02/>} />
      <Route path='technology/tech03' element={<Tech03/>} />
      <Route path='*' element={<Error/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
) 