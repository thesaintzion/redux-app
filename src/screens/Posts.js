import React, { Component } from 'react';
import img1 from '../assets/img/consult.jpg';
import img2 from '../assets/img/bonus.jpg';
import img3 from '../assets/img/financial2.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// import ListGroup from 'react-bootstrap/ListGroup';
// import ListGroupItem from 'react-bootstrap/ListGroupItem';





 class Posts extends Component {
     
     state = {
         showModal: false,
     }
     handleClose = () =>{
        this.setState ({
            showModal: false
        }) 
     } 
    handleShow = () => {
        this.setState ({
        showModal: true
      }) 
    }


    addNewPost = () => {
        // this.store.dispatch( addPost({title: 'POST Ladele 4', id: 4}));
    }

    render() {
        return (
            <>
            {/* <Modal show={this.state.showModal} onHide={this.handleClose} >
  <Modal.Header closeButton>
    <Modal.Title>ADD NEW</Modal.Title>
  </Modal.Header>
  <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={() => this.handleClose}>
      Close
    </Button>
    <Button variant="primary" onClick={() => this.handleClose}>
      Save Changes
    </Button>
  </Modal.Footer>
</Modal> */}

<div className="posts py-5 bg-dark">
                <div className="container">
                <h1 className="text-white text-center mb-4">POST</h1>

                <div className="row">
                    <div className="col-lg-4">
                    <Card className="shadow border-0">
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary" className="w-100">Go somewhere</Button>
                          
                        </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                    <Card className=" shadow border-0">
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary" className="w-100">Go somewhere</Button>
                          
                        </Card.Body>
                        </Card>
                    </div>

                    <div className="col-lg-4">
                    <Card className="shadow border-0">
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary" className="w-100">Go somewhere</Button>
                          
                        </Card.Body>
                        </Card>
                    </div>

                    {/* <div className="col-lg-12 text-center mt-5" onClick={() => this.handleShow}>
                    <Button variant="light">ADD MORE POST +</Button>
                    </div> */}

                </div>


 
                </div>
            </div>




</>
        );

       
    }
}

export default Posts;
