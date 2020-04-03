import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import Form from './components/Form.js'
import Top from './components/Top.js'
import Bottom from './components/Bottom.js'
import ClassExample from './components/ClassExample.js'
import Crud from './components/pages/Crud.js'
import Header from './components/layout/Header'
import Reduxexp from './components/Reduxexp';


class App extends Component{
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path="/" render={props => (
              <React.Fragment>
                  <Top/>              
                  <Form/>
                  <br/>
                  <Bottom/>
              </React.Fragment>
            )}/>
            <Route path='/Sandbox' component={ClassExample} />
            <Route path='/CRUD' component={Crud} />
            <Route path='/Reduxexp' component={Reduxexp} />
            
          </div> 
        </div>
      </Router>
        
      );
  }
}

export default App;
