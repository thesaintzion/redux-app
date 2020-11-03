import React, { Component } from 'react';
import './App.css';
import Carosel from './screens/Carosel';
import Posts from './screens/Posts';

class App extends  Component {

  render(){
    return (
      <div>
     <Carosel/>
     <Posts/>
      </div>
      );
  }
}

export default App;
