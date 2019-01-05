import React, { Component } from 'react'
import { connect } from 'react-redux'

// import { bindActionCreators } from 'redux'
// import * as actions from './action'

import { filmAction } from './action'

// redux负责解决films api action
// action 应该有组件来触发

class App extends Component {
  componentDidMount() {
    this.props.getFilmData();
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.props.films.map((film, index) => {
              return (
                <li key={index}>
                  <h2>{film.name}</h2>
                  <img src={film.poster} alt={film.name}/>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    films: state.films
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     fileActions: bindActionCreators(actions, dispatch)
//   }
// }

function mapDispatchToProps(dispatch) {
  return {
    getFilmData: () => {
      dispatch(filmAction())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
