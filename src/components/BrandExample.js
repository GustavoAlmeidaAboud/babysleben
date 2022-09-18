import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Yamii from '../images/yamii.jpg'
import { Image } from 'react-bootstrap';

function BrandExample() {
  return (
    <div>
      <Navbar  bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Image src={Yamii} rounded style={{"width": "75px"}}/>
            <p style={{
              "display": 'inline', 'padding':"2rem"}}>A blog written by Yamii</p>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default BrandExample;