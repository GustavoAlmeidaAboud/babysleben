import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './pages/home.js'
import About from './pages/about.js'
import Pregnancy from './pages/pregnancy.js'
import Article1 from './pages/article1.js'

function App() {

  return( 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/pregnancy" element={<Pregnancy />} />
      <Route path="/article1" element={<Article1 />} />
    </Routes>
  )
  
}

export default App