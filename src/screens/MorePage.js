import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import img3 from '../assets/img/financial2.jpg';


const mapStateToProp = (state) => {
    return { posts: state.posts };
}

class MorePage extends Component {

    goBack = () => {
        window.history.back()
    }
    render() {

        console.log('The Props', this.props);
      
        return (
          <>
          <header className="d-flex align-items-center align-content-center container-fluid bg-primary mb-4">
             <div><Button onClick={this.goBack} variant="primary"> &#8592; Go back</Button> </div>   <p className="ml-3 mb-0 text-white">All Posts</p>
          </header>


    
                <div className="container">
                <div className="row">
                    {this.props.posts.length > 0 ? this.props.posts.map( post => (
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
                    : <p className="text-center w-100 ">&#x26A0; No found</p>}
                </div>
              
               
                </div>
          
              
         </>
        )
    }
}

export default connect(mapStateToProp)(MorePage);
