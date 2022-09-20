import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Yamii from '../images/yamii.jpg'
import { Image } from 'react-bootstrap';
import { FaInstagram,FaTiktok,FaYoutube } from 'react-icons/fa';
import { IconContext } from "react-icons";

function BrandExample() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{position:"absolute",width:"100%"}}>
        <Container>
          <Navbar.Brand href="#home">
            <FaTiktok  style={{position:"absolute",marginLeft:"11rem",color:"#ff0050"}}/>
            <FaInstagram style={{position:"absolute",marginLeft:"9rem",color:"#833AB4"}}/>
            <FaYoutube style={{position:"absolute",marginLeft:"13rem",color:"#FF0000"}}/>
            <Image src={Yamii} style={{"width": "65px"}} fluid/>
            <p style={{"display": 'inline', 'padding':"2rem","fontFamily": 'Roboto'}}>A blog written by Yamii</p>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default BrandExample;