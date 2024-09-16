import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import First from "../assets/crousel/first.webp";
import Second from "../assets/crousel/2.webp";
import Third from "../assets/crousel/3.webp";
import Fourth from "../assets/crousel/4.webp";

const Caurosel = () => {
  return (
    <Carousel>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={Second}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={First}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        {/* <First text="Third slide" /> */}
        <img
          className="d-block w-100"
          src={Third}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        {/* <First text="Third slide" /> */}
        <img
          className="d-block w-100"
          src={Fourth}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default Caurosel
