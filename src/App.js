import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigationbar from './components/Navigationbar.js'
import Carrousel from './components/Carrousel.js';
import Footer from './components/Footer.js';
import ArticlesCards from './components/ArticlesCards.js';
import Image  from 'react-bootstrap';

function App() {
  return (
  <div>
      <Container className='d-grid gap-1' fluid>
      <Row>
        <Col><Navigationbar/></Col>
      </Row>
      <Row>
        <Col><Carrousel/> </Col>
      </Row>
      <Row>
        <Col><ArticlesCards title="Hello World" ima="https://cdn.pixabay.com/photo/2021/07/17/15/43/colour-pencils-6473351_960_720.jpg" text="Hello Hello Hello Hello Hello hello Heloooooooou askjdnaksjdnjasndjkasndasjd"/></Col>
      </Row>
      <Row>
        <Col><ArticlesCards title="Hello World" ima="https://cdn.pixabay.com/photo/2021/07/17/15/43/colour-pencils-6473351_960_720.jpg" text="Hello Hello Hello Hello Hello hello Heloooooooou askjdnaksjdnjasndjkasndasjd"/></Col>
      </Row>
      <Row>
        <Col><ArticlesCards title="Hello World" ima="https://cdn.pixabay.com/photo/2021/07/17/15/43/colour-pencils-6473351_960_720.jpg" text="Hello Hello Hello Hello Hello hello Heloooooooou askjdnaksjdnjasndjkasndasjd"/></Col>
      </Row>
      <Row>
        <Col><Footer /> </Col>
      </Row>
    </Container>
  </div>
  )
}

export default App