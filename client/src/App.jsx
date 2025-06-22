

import './App.css'
import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'
import Register from "./pages/Register"

function App() {


  return (
   <div>
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          
        </Routes>
    </Router>
   </div>
  )
}

export default App
