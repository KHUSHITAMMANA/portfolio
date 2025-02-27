import React from 'react'
import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom'
import Home from './Compents/Home'
import About from './Compents/About'
import Project from './Compents/project'
import Contanct from './Compents/contanct'
import NavbarComp from './Compents/NavbarComp'
import Skills from './Compents/Skills'

const App = () => {
  return (
    
    <Router>
      <NavbarComp/>
      <Routes>
        <Route path='/'element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/skills' element={<Skills/>}></Route>
        <Route path='/projects' element={<Project/>}></Route>
        <Route path='/contact' element={<Contanct/>}></Route>
</Routes>

</Router>
  )
}

export default App
