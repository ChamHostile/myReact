import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Carrousel = () => (
  <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://thetrashbash.files.wordpress.com/2014/10/interstellar-main-one-sheet-quad.jpg"
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="http://www.avalontheatregj.com/sites/default/files/Pacific%20Rim%20Uprising_0.jpg"
        alt="Third slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.arabnews.jp/en/wp-content/uploads/sites/2/2020/08/promare-1-1024x843.jpg"
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
);

export default Carrousel;
