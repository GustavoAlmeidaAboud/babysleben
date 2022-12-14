import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

var stylingObject = {
  div: {
    color: "red",
    border: "1px solid red"
  }, input: {
    margin: "2px",
    padding: "5px"
  }
}

function Navigationbar() {
  return (
    <Navbar className='fixed-top' bg="light" expand="lg">
      <Container>
      <Link to='/' className='m-auto'>BABYSLEBEN</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav style={{"textAlign":"center"}} className="me-auto">
              <Nav.Link className="test" href="/" >Home</Nav.Link>
              <Nav.Link className="test" href="/">Pregnancy</Nav.Link>
              <Nav.Link className="test" href="#deets">Child Safety</Nav.Link>
              <Nav.Link className="test" eventKey={2} href="#memes">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;