import React, { Component } from 'react';
import './App.css';
import AddPost from './screens/AddPost';
import Carosel from './screens/Carosel';
import Posts from './screens/Posts';
import {  Route, Switch } from 'react-router-dom';
import MorePage from './screens/MorePage';
import Menu from './screens/Menu';
import Api from './screens/Api';
import Owl from './screens/Owl'


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
          {/* <Owl/> */}
          <Menu/>
      </React.Fragment>
     </Route>

      <Route path="/more" component={MorePage} />
      <Route path="/api-posts" component={ Api } />
      <Route path="/owl" component={ Owl } />
      </Switch>
      </>
      // </Router>
      );
  }
}

export default App;
