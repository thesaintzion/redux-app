import React, { Component } from 'react';
import './App.css';
import AddPost from './screens/AddPost';
import Carosel from './screens/Carosel';
import Posts from './screens/Posts';

class App extends  Component {

  render(){
    return (
      <div>
     <Carosel/>
     <Posts/>
     <AddPost/>
      </div>
      );
  }
}

export default App;
