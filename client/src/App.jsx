

import './App.css'
import React from 'react'
import {Router,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar'

function App() {


  return (
   <div>
    <Router>
      <Navbar/>

    </Router>
   </div>
  )
}

export default App
