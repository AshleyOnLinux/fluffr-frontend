import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Route, Routes } from 'react-router-dom'
import Home from '@pages/Home/Home'
import Navbar from '@layouts/Navbar/Navbar'
import Posts from '@pages/Posts/Posts'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/p" element={<Posts/>} />
      </Routes>
    </div>
  )
}

export default App
