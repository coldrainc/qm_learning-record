import React, { Component } from 'react'
import PropTypes from 'prop-types'


export const connect = (Comp, propsTypes) => {
  class Connect extends Component {
    static contextTypes = {
      store: PropTypes.object,
      dispatch: PropTypes.func,
      subscribe: PropTypes.func,
      getStore: PropTypes.func,
      ...propsTypes
    }
    constructor(props) {
      super(props)
      this.state = {
        dispatch: () => {}
      };
    }
    componentWillMount() {
      const { subscribe, dispatch } = this.context
      this._upState()
      this.setState({
        dispatch
      })
      subscribe(() => this._upState())
    }
    _upState = () => {
      const { getState } = this.context;
      this.setState({
        ...getState()
      })
    }
    render() {

      return (
        <div className="connect">
            <Comp {...this.state}/>
        </div>
      )
    };
  }

  return Connect;
}