import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigationbar from '../components/Navigationbar.js'
import Carrousel from '../components/Carrousel.js';
import ArticlesCards from '../components/ArticlesCards.js';
import BrandExample from '../components/BrandExample.js';
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom';

  
function Home (){

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
          <Col><ArticlesCards title="Hello World" ima="https://i1.adis.ws/i/washford/Isofix_Car_Seat_FT_770x470.jpg?w=768" text="Hello Hello Hello Hello Hello hello Heloooooooou askjdnaksjdnjasndjkasndasjd"/></Col>
          <Col><ArticlesCards title="Hello World" ima="https://th.bing.com/th/id/OIP.A33OpIjxMD17Z6yG1_SW2AHaE6?w=301&h=200&c=7&r=0&o=5&dpr=1.25&pid=1.7" text="Hello Hello Hello Hello Hello hello Heloooooooou askjdnaksjdnjasndjkasndasjd"/></Col>
        </Row>
          <Row>
            <Col><BrandExample/></Col>
          </Row>
      </Container>
    </div>
    )
  }
  
export default Home;