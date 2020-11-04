import React, { Component } from 'react';
import img3 from '../assets/img/financial2.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProp = (state) => {
    return { posts: state.posts };
}

const SinglePost = (prop) => {
   return ( prop.posts.length < 1 ? <p className="text-white text-center w-100 "> &#x26A0; No found</p> : 
   prop.posts.map(post => (
    <div key={post.id} className="col-lg-4">
      <Card className="shadow border-0">
          <Card.Img variant="top" src={img3} />
          <Card.Body>
            <Card.Title>{post.title} {post.id}</Card.Title>
              <Card.Text>
              {post.description}
              </Card.Text>
              <Button variant="primary" className="w-100">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    ))  
   )
}

 class CPosts extends Component {
    constructor(props) {
        super(props);
     
     this.state = {
         showModal: false,
        }
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
                { this.props.posts.length > 0 ? 
                <div className="text-center mt-3">
                <Link className="text-white" to="/more"><Button  variant="primary" className="w-100 ">Go to more  </Button></Link>
                </div>
                : null}
               
                </div>
            </div>
    </>
        );

       
    }
}

const Posts = connect(mapStateToProp)(CPosts);

export default Posts;
