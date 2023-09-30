import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import DestinationMoon from './Components/Destination/DestinationMoon.jsx'
import Crew01 from './Components/Crew/Crew01.jsx'
import Home from './Components/Home.jsx'
import Error  from './Components/Error.jsx'
import Tech01 from './Components/Technology/Tech01.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App />}>
      <Route path='' element={<Home />}/>
      <Route path='' element={<Home />}/>
      <Route path='destination' element={<DestinationMoon />}/>
      <Route path='destination/moon' element={<DestinationMoon />}/>
      <Route path='/crew' element={<Crew01/>} />
      <Route path='technology' element={<Tech01/>} />
      <Route path='*' element={<Error/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
) 