import React, { Component } from 'react';
// import img1 from '../assets/img/consult.jpg';
// import img2 from '../assets/img/bonus.jpg';
import img3 from '../assets/img/financial2.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal';


// Map the redux state to the prop of a component

const mapStateToProp = state => {
    return { posts: state.posts };
}

const SinglePost = (prop) => {
    console.log('The Post Length', prop.posts.length)
   return ( prop.posts.length < 1 ? <p className="text-white">No found</p> : 
   prop.posts.map(post => (
    <div key={post.id} className="col-lg-4">
      <Card className="shadow border-0">
          <Card.Img variant="top" src={img3} />
          <Card.Body>
            <Card.Title>{post.title} {post.id}</Card.Title>
              <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
              </Card.Text>
              <Button variant="primary" className="w-100">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    ))  
   )
}

 class CPosts extends Component {
     
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
        console.log('The props', this.props)
        return (
            <>
  
            <div className="posts py-5 bg-dark">
                <div className="container">
                <h1 className="text-white text-center mb-4">POST</h1>
                <div className="row">
                        <SinglePost posts={this.props.posts} />
                </div>
                </div>
            </div>

</>
        );

       
    }
}

const Posts = connect(mapStateToProp)(CPosts);

export default Posts;
