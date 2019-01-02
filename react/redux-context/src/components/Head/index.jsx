import React, { Component} from 'react';
import { connect } from '../../redux';
import PropTypes from 'prop-types'

class Head extends Component{
  render() {
    return (
      <div>
        <div className="head">{this.props.head}</div>
      </div>
    )
  };
}

const propsTypes = {
  store: PropTypes.object
}

export default connect(Head, propsTypes);