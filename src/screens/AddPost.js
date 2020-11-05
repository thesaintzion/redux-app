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

class AddPost extends Component {
  state = {
    title: '',
    description: '',
  }


  onFormSubmit = (e) => {
      if(this.state.title.toString().trim() === ''){
        alert('Please fil in title');
      }else if(this.state.description.toString().trim() === ''){
        alert('Please fil in description');
      }else{
        this.props.addPost({title : this.state.title,  description: this.state.description});
        
        this.setState({
          title: '',
          description: ''
        }); 
      }

      e.preventDefault();
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





export default connect(null, mapDispatchToProp)(AddPost);