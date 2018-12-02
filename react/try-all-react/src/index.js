import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import './index.css';

// class Hello extends React.Component{
//   // render() {
//   //   // return (
//   //   //   <div>Hello Workd!</div>
//   //   // );
//   //   return React.createElement(
//   //     "div", 
//   //     {className: 'hello'}, 
//   //     React.createElement(
//   //       'p',
//   //       {className: 'test'},
//   //       'Hello World'
//   //     )
//   //   )
//   // }
//   constructor(props) {
//     super(props);
//     this.state = {
//       time: 'Hello World!'
//     }
//   }
//   render() {
//     return (
//       <div>
//         Hello {this.state.time}
//         <input 
//           type="text" 
//           value={this.state.time} 
//           onChange={(e) => this.handleChange(e)}
//         />
//       </div>
//     );
//   }

// }

ReactDOM.render(<App/>, document.getElementById('root'));