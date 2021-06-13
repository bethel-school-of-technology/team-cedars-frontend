import React from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../Images/banner1.png';
import banner2 from '../Images/banner2.png';
import banner3 from '../Images/banner4.png';


const CarouselContainer = () => {
  return (
    <Carousel fade={true} controls={false} pause={false}>
      <Carousel.Item interval={5000}>
        <img
          id="banners"
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>EVENTS</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>SERVICES</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Events"
        />
        <Carousel.Caption>
          <h3>WORSHIP</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer;