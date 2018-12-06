import React, {Component} from 'react';
import Header from './Header';
import {Link} from 'react-router-dom'
class Single extends Component {
  render() {
    return (
      <div>
        <h1>Single</h1>
        <Link to="/">去首页</Link>
      </div>
    );
  }
}

export default Single;