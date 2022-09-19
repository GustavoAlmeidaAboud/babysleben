import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigationbar from '../components/Navigationbar'
import Carrousel from '../components/Carrousel'
import BrandExample from '../components/BrandExample'
import Ratio from 'react-bootstrap/Ratio';

function article1() {
    return (
        <div>
            <Container className='d-grid gap-1' fluid>
                <Row>
                    <Col><Navigationbar/></Col>
                </Row>
                <Row>
                    <Col><Carrousel fluid/> </Col>
                </Row>
                <Row >
                    <Col>
                        <Ratio aspectRatio={100}>
                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/-GertYBBkGE"></iframe>
                        </Ratio>
                    </Col>
                </Row>
                <Row>
                    <Col><h1 style={{"textAlign":"center","display":"block"}}>Schwangerschaftsgurt</h1></Col>
                </Row>
                <Row>
                    <Col><p  style={{"textAlign":"justify"}}>Der Besafe Schwangerschaftsgurt, 
                    ist der beste Gurt auf dem Markt um euer Baby zu schützen. 
                    Dieser Gurt hilf damit die Gurtführung, im unteren Bereich des Bauches nicht auf dem Baby ist. 
                    Somit wenn wir eine Vollbremsung haben schirft der Gurt nicht am Baby ab, dies kann dem Baby das Leben retten. 
                    Ich trage diesen Gurt nun schon für die zweite Schwangerschaft und bin so froh ihn zu haben. ☺️"
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col><BrandExample/></Col>
                </Row>
            </Container>
    </div>
    )
}

export default article1
