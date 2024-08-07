import React from 'react'
import { Route, Routes } from 'react-router-dom'
import '../src/index.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Call from './Components/Call'
import Contact from './Components/Contact'
import About from './Components/About'
import Service from './Components/Service'
import Training from './Components/Training'
import Client from './Components/Client'
import Digital from './Components/Digital'
import Website from './Components/Website'
import Mobile from './Components/Mobile'
import Graphic from './Components/Graphic'
import Video from './Components/Video'
import Domain from './Components/Domain'
const App = () => {
  return (



  <>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Service' element={<Service/>}/>
    <Route path='/Training' element={<Training/>}/>
    <Route path='/Client' element={<Client/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Call' element={<Call/>}/>
    <Route path='/Digital' element={<Digital/>}/>
    <Route path='/Website' element={<Website/>}/>
    <Route path='/Mobile' element={<Mobile/>}/>
    <Route path='/Graphic' element={<Graphic/>}/>
    <Route path='/Video' element={<Video/>}/>
    <Route path='/Domain' element={<Domain/>}/>
  </Routes>
  <Footer/>
  </>
  )
}

export default App
