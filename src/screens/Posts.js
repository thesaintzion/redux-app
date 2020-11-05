import React, { Component } from 'react';
import img3 from '../assets/img/financial2.jpg';
import img4 from '../assets/img/consult.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getApiPosts }  from '../redux/actions/actions';

const mapStateToProp = (state) => {
    return { posts: state.posts.slice(0,3),  apiPosts: state.apiPosts.slice(0,3) };
}

const SinglePost = (prop) => {
   return ( prop.posts.length < 1 ? <p className="text-white text-center w-100 "> &#x26A0; No found</p> : 
   prop.posts.map(post => (
    <div key={post.id} className="col-lg-4">
      <Card className="shadow border-0 h-100">
          <Card.Img variant="top" src={img3} />
          <Card.Body className="d-flex flex-column justify-content-between h-100">
            <Card.Title>{post.title} {post.id}</Card.Title>
              <Card.Text>
              {post.description.length > 120 ? `${post.description.substr(0, 120)}... ` : post.description} 
              </Card.Text>
              <Button variant="primary" className="w-100">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    ))  
   )
}

const SingleApiPost = (prop) => {
    
    return (prop.apiPosts && prop.apiPosts.length > 0 ? prop.apiPosts.map( post => (
        <div key={post.id} className="col-lg-4">
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
    : <p className="text-white text-center w-100">&#x26A0; No api posts found</p>
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

    componentDidMount(){
     this.props.getApiPosts()    
    }



    render() {
        console.log('The  state prop', this.props )
        return (
            <>
            <div className="posts py-5 bg-dark">
                <div className="container">
                <h1 className="text-white text-center mb-4">POSTS</h1>
                <div className="row">
                    <SinglePost posts={this.props.posts} />
                </div>
                { this.props.posts.length > 0 ? 
                <div className="text-center mt-3">
                <Link className="text-white" to="/more"><Button  variant="primary" className="w-100 ">Go to more  </Button></Link>
                </div>
                : null}
               
               <hr />

               <h1 className="text-white text-center mb-4">API POSTS</h1>
               <div className="row">
               <SingleApiPost  apiPosts={this.props.apiPosts} />
               </div>
               { this.props.apiPosts && this.props.apiPosts.length > 0 ? 
                <div className="text-center mt-3">
                <Link className="text-white" to="/api-posts"><Button  variant="primary" className="w-100 ">Go to more api  </Button></Link>
                </div>
                : null}

                </div>
            </div>
    </>
        );

       
    }
}

const Posts = connect(mapStateToProp, {getApiPosts})(CPosts);

export default Posts;
