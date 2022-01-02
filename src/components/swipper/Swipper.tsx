import React from 'react';
import './swipper.scss';
import excercise from '../../images/excercise.png';
import lenus from '../../images/lenus.png';
import { ReactNode } from './swipperTypes';

// Carousel component , used to display  slider images .
function Carousel(props: ReactNode) {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={excercise} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={lenus} alt="Second slide" />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}
export default Carousel;
