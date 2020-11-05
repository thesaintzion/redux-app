import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import img4 from '../assets/img/consult.jpg';
import {  getApiPosts } from '../redux/actions/actions';




const mapStateToProp = (state) => {
    return { apiPosts: state.apiPosts.slice (0, 9) };
}

export class Api extends Component {
    goBack = () => {
      window.history.back()
    }

    componentDidMount = () =>{
        this.props.getApiPosts();
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    render() {
        return (
          <>
          <header className="d-flex align-items-center align-content-center container-fluid bg-primary mb-4">
             <div><Button onClick={this.goBack} variant="primary"> &#8592; Go back</Button> </div>   <p className="ml-3 mb-0 text-white">Api Posts</p>
          </header>
            <div className="container mt-5">
        <div className="row">
            {this.props.apiPosts.length > 0 ? this.props.apiPosts.map( post => (
                    <div key={post.id} className="col-lg-4 mb-5">
                    <Card className="shadow border-0 h-100 ">
                    <Card.Img variant="top" src={img4} />
                    <Card.Body className="d-flex flex-column justify-content-between h-100">
            <Card.Title>{post.title}</Card.Title>
                        <Card.Text>
                        {post.body.length > 120 ? `${post.body.substr(0, 120)}... ` : post.body} 
                        
                        </Card.Text>
                        <Button variant="primary" className="w-100">Read more</Button> 
                    </Card.Body>
                    </Card>
                    </div>
                    )) 
                    : <p className="text-center w-100 ">&#x26A0; No found</p>}
        </div>
            </div>
         </>
        )
    }
}

export default connect(mapStateToProp, { getApiPosts })(Api);
