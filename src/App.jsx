import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Services from './Pages/Services'
import NotFound from './Pages/NotFound'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navber from './Components/Navber'

function App() {
  

  return (
    
    <BrowserRouter>
      <Navber/>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/About" element={<About/>}/>
        <Route path = "/Services" element={<Services/>}/>
        <Route path = "/Contact" element={<Contact/>}/>
        <Route path = "/NotFound" element={ <NotFound/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
