import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel' ;
import logo from '../logo.svg'

class Carosel extends Component {

    render(){
    
        return (
            <React.Fragment>
                <div className="d-flex">
                <div className="w-50  h-100  welcome">
                    <h1>WELCOME <br />  HOME <br /> <span className="text-dange text-bold text-underline">Saint</span></h1>
                    <img src={logo} className="App-logo w-50" />
                </div>
                
             
                <Carousel className="w-50 carosel-con shadow">
  <Carousel.Item>
    <img
     
      src="../assets/img/consult.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      src="../assets/img/bonus.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      src="../assets/img/financial2.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
            </React.Fragment>
        )
    }
  
}
export default Carosel;
