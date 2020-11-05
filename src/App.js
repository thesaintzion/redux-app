import React, { Component } from 'react';
import './App.css';
import AddPost from './screens/AddPost';
import Carosel from './screens/Carosel';
import Posts from './screens/Posts';
import {  Route, Switch } from 'react-router-dom';
import MorePage from './screens/MorePage';
import Menu from './screens/Menu';
import Api from './screens/Api';

class App extends  Component {

  render(){
    return (
      // <Router>
      <>
      <Switch>
      <Route exact path="/">
      <React.Fragment>
          <Carosel/>
          <Posts/>
          <AddPost/>
          <Menu/>
      </React.Fragment>
     </Route>

      <Route path="/more" component={MorePage} />
      <Route path="/api-posts" component={ Api } />
      </Switch>
      </>
      // </Router>
      );
  }
}

export default App;
