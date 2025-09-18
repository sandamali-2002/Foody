import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />



      </Routes>
    </Router>
  )
}

export default App
