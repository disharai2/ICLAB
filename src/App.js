import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './Components/Home'
import Menu from './Components/Menu'
import About from './Components/About'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from './Components/NavBar'


function App(){
  return(
    <>
    <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
      <Route path="/"element={<Home/>}></Route>
      <Route path="/about"element={<About/>}></Route>
      <Route path="/menu"element={<Menu/>}></Route>

    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App