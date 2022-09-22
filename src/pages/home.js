import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigationbar from '../components/Navigationbar.js'
import Carrousel from '../components/Carrousel.js';
import ArticlesCards from '../components/ArticlesCards.js';
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom';
import { Outlet} from "react-router-dom";

  
function Home (){

    return (
    <>
        <Container className='d-grid gap-1' fluid>
        <Row>
          <Col><ArticlesCards pagelink={"/article1"} title="Der Besafe Schwangerschaftsgurt" ima="https://th.bing.com/th/id/R.e61041185cd63827e6cdb7a9179ae285?rik=rm2VN7OYHIS75w&pid=ImgRaw&r=0" text="Yamii Yamii
  Der Besafe Schwangerschaftsgurt, ist der beste Gurt auf dem Markt um euer Baby zu schützen. 
"/></Col>
          <Col><ArticlesCards title="Hello World" ima="https://i1.adis.ws/i/washford/Isofix_Car_Seat_FT_770x470.jpg?w=768" text="Hello Hello Hello Hello Hello hello Heloooooooou askjdnaksjdnjasndjkasndasjd"/></Col>
          <Col><ArticlesCards title="Hello World" ima="https://th.bing.com/th/id/OIP.A33OpIjxMD17Z6yG1_SW2AHaE6?w=301&h=200&c=7&r=0&o=5&dpr=1.25&pid=1.7" text="Hello Hello Hello Hello Hello hello Heloooooooou askjdnaksjdnjasndjkasndasjd"/></Col>
        </Row>
        <Row>
         <Col><ArticlesCards pagelink={"/article1"} title="Der Besafe Schwangerschaftsgurt" ima="https://sc04.alicdn.com/kf/HTB1U5MOa7L0gK0jSZFAq6AA9pXaH.jpg" text="Yamii Yamii
  Der Besafe Schwangerschaftsgurt, ist der beste Gurt auf dem Markt um euer Baby zu schützen. 
"/></Col>
          <Col><ArticlesCards title="Hello World" ima="https://th.bing.com/th/id/OIP.tGPTO3r5-_K-YDcn3OzVPwHaFj?pid=ImgDet&rs=1" text="Hello Hello Hello Hello Hello hello Heloooooooou askjdnaksjdnjasndjkasndasjd"/></Col>
          <Col><ArticlesCards title="Hello World" ima="https://www.netpapa.de/wp-content/plugins/aawp/public/image.php?url=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNTFkQzdkZ0E4T0wuanBn"/></Col>
        </Row>
      </Container>
    </> 
    )
  }
  
export default Home;