import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigationbar from './components/Navigationbar.js'
import Carrousel from './components/Carrousel.js';
import Footer from './components/Footer.js';
import ArticlesCards from './components/ArticlesCards.js';
import { FaTiktok,FaYoutube } from 'react-icons/fa';
import Footerlogo from './components/Footerlogo.js';

function App() {
  return (
  <div>
      <Container className='d-grid gap-1' fluid>
      <Row>
        <Col><Navigationbar/></Col>
      </Row>
      <Row>
        <Col><Carrousel fluid/> </Col>
      </Row>
      <Row>
        <Col><ArticlesCards title="Hello World" ima="https://th.bing.com/th/id/R.e61041185cd63827e6cdb7a9179ae285?rik=rm2VN7OYHIS75w&pid=ImgRaw&r=0" text="Yamii Yamii
Der Besafe Schwangerschaftsgurt, ist der beste Gurt auf dem Markt um euer Baby zu schützen. 
Dieser Gurt hilf damit die Gurtführung, im unteren Bereich des Bauches nicht auf dem Baby ist. 
Somit wenn wir eine Vollbremsung haben schirft der Gurt nicht am Baby ab, dies kann dem Baby das Leben retten. 
Ich trage diesen Gurt nun schon für die zweite Schwangerschaft und bin so froh ihn zu haben. ☺️"/></Col>
        <Col><ArticlesCards title="Hello World" ima="https://cdn.pixabay.com/photo/2021/07/17/15/43/colour-pencils-6473351_960_720.jpg" text="Hello Hello Hello Hello Hello hello Heloooooooou askjdnaksjdnjasndjkasndasjd"/></Col>
        <Col><ArticlesCards title="Hello World" ima="https://cdn.pixabay.com/photo/2021/07/17/15/43/colour-pencils-6473351_960_720.jpg" text="Hello Hello Hello Hello Hello hello Heloooooooou askjdnaksjdnjasndjkasndasjd"/></Col>
      </Row>
      <Row className="fixed-bottom">
        <Row>
          <Col>
            <Footer 
              tiktok={<FaTiktok size={30} style={{ fill: '#ff0050' }}/>}
              youtube={<FaYoutube size={30} style={{ fill: '#FF0000' }} />}
              instagram={<FaYoutube size={30} style={{ fill: 'white' }} />}
            />
          </Col>
          <Col className='footertext'>Written by Yamii</Col>
        </Row>
      </Row>
    </Container>
  </div>
  )
}

export default App