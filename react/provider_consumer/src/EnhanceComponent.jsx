import React, { Component } from 'react'

var EnhanceComponent = (Comp) => class Enhance extends Component {
  render() {
    return (
      <section>
        <h1>I'm high-order component</h1>
        <Comp
          {...this.state}
          {...this.props}
        />
      </section>
    )
  };
}
export default  EnhanceComponent;