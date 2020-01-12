// context api 共享状态机制
// react-redux 基于它
// Provider 的能力
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from './context'
import Header from './Header'

class App extends React.Component {
  render() {
    const style = {
      backgroundColor: 'red',
      color: 'white',
      fontSize: '14px'
    }
    return (
      <Provider value={{title: 'React In Patterns'}} style={ style }>
        <Header />
      </Provider>
    )
  };
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)