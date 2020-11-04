import React, { Component } from 'react';
import './App.css';
import AddPost from './screens/AddPost';
import Carosel from './screens/Carosel';
import Posts from './screens/Posts';
import {  Route, Switch } from 'react-router-dom';
import MorePage from './screens/MorePage';

class App extends  Component {

  render(){
    return (
      // <Router>
       
      <div>
      <Switch>
      <Route exact path="/">
      <React.Fragment>
        <Carosel/>
          <Posts/>
          <AddPost/>
        </React.Fragment>
     </Route>

      <Route path="/more" component={MorePage} />
      </Switch>
      </div>
      
      // </Router>
      );
  }
}

export default App;
