import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { addPost } from '../redux/actions/actions';

function mapDispatchToProp(dispatch){
  return {
    addPost: post => dispatch(addPost(post))
  }

}

class CAddPost extends Component {

constructor(props){
  super(props);

  this.state = {
    title: '',
    description: '',
  }
}

  onFormSubmit = (e) => {
      e.preventDefault();
        this.props.addPost({title : this.state.title,  description: this.state.description});

        this.setState({
          title: '',
          description: ''
        });
        

  }

  onInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }
    
    render() {
        return (
            <React.Fragment>

              <div className="container py-4">
                <div className="row">
                  <div className="col-lg-4 mx-auto">
                  <Form onSubmit={this.onFormSubmit}>
                
                  <Form.Control type="text" id="title" value={this.state.title} onChange={this.onInputChange} placeholder="Title" />

           
                  <Form.Control type="text" id="description" value={this.state.description} onChange={this.onInputChange} placeholder="Description" />
              
                <Button variant="primary" type="submit" className="w-100 mt-3">
                Submit
                </Button>
                </Form>
                  </div>
                </div>
              </div>
            </React.Fragment>
        )
    }
}



const AddPost = connect(null, mapDispatchToProp)(CAddPost);

export default AddPost;