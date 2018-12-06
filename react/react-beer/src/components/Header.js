import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'

class Header extends Component {
  static propTypes = {
    siteName: PropTypes.string
  }
  render() {
    return (
      <div>
        <h1>
          {/* a 将完全被接管 */}
          <Link to="/">{this.props.siteName}</Link>
        </h1>
      </div>
    );
  }
}

export default Header;