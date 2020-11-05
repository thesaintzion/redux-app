import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel' ;
import logo from '../logo.svg';
import img1 from '../assets/img/consult.jpg';
import img2 from '../assets/img/bonus.jpg';
import img3 from '../assets/img/financial2.jpg';

class Carosel extends Component {
    render(){

        return (
            <React.Fragment>
                <div className="d-flex">
                <div className="w-50  h-100  welcome">
                    <h1 className="h1">WELCOME <br />  HOME <br /> <span className="text-bold text-info-light text-underline">SAINT</span></h1>
                    <img  src={logo} className="App-logo w-50" alt="your head"/>
                </div>
              
        <Carousel className="w-50 carosel-con shadow">
  <Carousel.Item>
    <img
    className="img"
      src={img1}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
    className="img"
       src={img2}
      alt="Third slide"
    />

    {/* <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
  </Carousel.Item>

  <Carousel.Item>
    <img
    className="img"
      src={img3}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
</div>
            </React.Fragment>
        )
    }
  
}
export default Carosel;
