import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigationbar from '../components/Navigationbar'
import Carrousel from '../components/Carrousel'
import BrandExample from '../components/BrandExample'


function pregnancy() {

    return (
        <div>
            <Container className='d-grid gap-1' fluid>
            <Row>
                <Col><Navigationbar/></Col>
             </Row>
            <Row>
                <Col><Carrousel fluid/> </Col>
            </Row>
            <Row className='fixed-bottom'>
                <Col><BrandExample/></Col>
            </Row>
      </Container>
    </div>
    )
  }

export default pregnancy
