import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Outlet, Link } from "react-router-dom";

const Carrousel = () => {
  return (
    <div className='karusel'>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 image1"
            src="https://th.bing.com/th/id/R.e61041185cd63827e6cdb7a9179ae285?rik=rm2VN7OYHIS75w&pid=ImgRaw&r=0"
            alt="First slide"
            />
            
            <Carousel.Caption>
            <Link to ="/article1" style={{all:"unset"}}><h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p></Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 image1"
            src="https://i1.adis.ws/i/washford/Isofix_Car_Seat_FT_770x470.jpg?w=768"
            alt="Second slide"
          />

          <Carousel.Caption>
            <Link to={''} style={{all:"unset"}}><h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 image1"
            src="https://th.bing.com/th/id/OIP.A33OpIjxMD17Z6yG1_SW2AHaE6?w=301&h=200&c=7&r=0&o=5&dpr=1.25&pid=1.7"
            alt="Third slide"
          />

          <Carousel.Caption>
            <Link to={''}style={{all:"unset"}}><h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p></Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carrousel;