import React from 'react';

function A(WrappedComponent) {
  return class Text extends React.Component {
    render() {
      return (
        <div>
          <p>Hello NiHao!</p>
          <WrappedComponent/>
        </div>
      );
    }
  }
}

export default A;