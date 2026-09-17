import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Menu from './component/Menu'
import Home from './component/Home'
import Movies from './component/Movies'
import Stream from './component/Stream'
import Shows from './component/Shows'
import Plays from './component/Plays'
import Footer from './component/Footer'
const App = () => {
  return (
    <Router>
   <Navbar/>
   <Menu/>
   <Routes>
    <Route path='/' element={<Home/>}/>
   <Route path='/movies' element={<Movies/>}/>
   <Route path='/stream' element={<Stream/>}/>
    <Route path='/shows' element={<Shows/>}/>
     <Route path='/plays' element={<Plays/>}/>
   </Routes>
   <Footer/>
   </Router>
  )
}

export default App
