import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Carrousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 image1"
          src="https://th.bing.com/th/id/R.e61041185cd63827e6cdb7a9179ae285?rik=rm2VN7OYHIS75w&pid=ImgRaw&r=0"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 image1"
          src="https://th.bing.com/th/id/OIP.R_Im5J6OFml__E2PkGljGwHaFT?pid=ImgDet&rs=1"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 image1"
          src="https://learnenglishteens.britishcouncil.org/sites/teens/files/styles/article/public/field/image/rs930_135120665-low.jpg?itok=g5LI5W4C"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;