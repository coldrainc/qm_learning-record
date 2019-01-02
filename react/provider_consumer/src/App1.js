import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import EnhancedComponent from './EnhanceComponent.jsx';

var Content = (props) => <p>I am {props.name}</p>;

Content.propTypes = {
  name: PropTypes.string
}

var EnhancedContent = EnhancedComponent(Content);

class App extends Component {
  render() {
    return (
      <EnhancedContent name="Content component"/>
    );
  }
}

export default App;
