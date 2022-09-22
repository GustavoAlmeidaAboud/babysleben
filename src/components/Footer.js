import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Yamii from '../images/yamii.jpg'
import { Image } from 'react-bootstrap';
import { IconContext } from "react-icons";
import  Insta  from '../images/instagram.png'


function Footer(){
  return(
    <Container fluid style={{backgroundColor:"black"}}>
      <Row className="justify-content-md-center">
        <Col style={{color:"white",textAlign:"center"}}>
          <img src='https://clipart.info/images/ccovers/1559063340instagram-icon-logo-png-color.png' style={{height:"1rem"}}/>
          <img src='https://clipart.info/images/ccovers/1590430652red-youtube-logo-png-xl.png' style={{height:"1rem",marginLeft:"0.5rem",marginRight:"0.5rem"}}/>
          <img src='https://iconape.com/wp-content/files/mu/110927/svg/tiktok-icon-white-tik-tok-logo-icon-png-svg.png' style={{height:"1rem"}}/>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }} style={{color:"white",textAlign:"center",fontFamily:"Roboto",marginTop:"0.5rem"}}><p>Written by Yamii</p></Col>
      </Row>
    </Container>
  )
}

export default Footer;