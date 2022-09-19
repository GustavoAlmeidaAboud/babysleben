import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './pages/home.js'
import About from './pages/about.js'
import Pregnancy from './pages/pregnancy.js'
import Article1 from './pages/article1.js'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navigationbar from './components/Navigationbar.js'
import Carrousel from './components/Carrousel.js'
import BrandExample from './components/BrandExample.js'
import Col from 'react-bootstrap/Col';

function App(){

  return( 
    <div>
      <Container className='d-grid gap-1 fixbot' fluid>
        <Row>
          <Col><Navigationbar/></Col>
        </Row>
        <Row>
          <Col><Carrousel fluid/> </Col>
        </Row>
      </Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pregnancy" element={<Pregnancy />} />
        <Route path="/article1" element={<Article1 />} />
      </Routes>
    </div>
  )
}
export default App