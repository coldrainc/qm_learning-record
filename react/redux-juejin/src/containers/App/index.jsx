import React, { Component } from 'react'
import './App.css'
import Header from './sub/Header'
import {connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { registerActions } from '../../redux/actions/users';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header
            users={this.props.users}
            registerActions={this.props.registerActions} 
          />
        </div>
        <div className="App-body">
          <div className="welcome-view">
            <div className="category-nav">
              1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd
            </div>
            <div className="main">
              21adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd
            </div>
            <div className="sidebar">
              31adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd1adasdasdasdasdasd
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}
function mapDispatchProps(dispatch){
  return {
    registerActions: bindActionCreators(registerActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchProps
)(App);