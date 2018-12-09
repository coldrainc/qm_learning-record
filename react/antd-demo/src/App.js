import React, {Component} from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import {
  Form, Icon, Input, Button 
} from 'antd';

import Main from './components/Main'
const FormItem = Form.Item;

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Main}></Route>
          <Route path="/dashboard/monitor" component={Main}></Route>
        </div>
      </Router>
    );
  }
}

export default App;