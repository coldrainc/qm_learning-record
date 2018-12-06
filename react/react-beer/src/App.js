import React, { Component } from 'react';
import Header from './components/Header';
import Results from './components/Results';
import Search from './components/Search';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header siteName="Beer me!"></Header>
        <Search  />
        <Results/>
      </div>
    );
  }
}

export default App;
