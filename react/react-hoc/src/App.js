import React, { Component } from 'react';
import './App.css';
import B from './components/B';

class App extends Component {
  state = {
    count: 0
  }
  render() {
    return (
      <div className="App">
        <div>
          <input type="button" ref={input => this.textInput = input} value="test"></input>
          {this.state.count}
          <h3>高阶组件理解</h3>
          <B/>
        </div>
      </div>
    );
  }
  componentDidMount = () => {
    this.textInput.addEventListener('click', () => {
      this.setState({
        count: this.state.count + 1
      })
    })
  };
  
}

export default App;
