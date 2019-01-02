import React, { Component} from 'react';
import Button from '../Button';
import { connect } from '../../redux';

// static 静态属性可以直接由类调用不需要实例化
class Body extends Component{
  render() {
    return (
      <div>
        <div className="body">{this.props.body}</div>
        <Button></Button>
      </div>
    )
  };
}

export default connect(Body);