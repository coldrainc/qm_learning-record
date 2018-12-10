import React, {Component} from 'react';

class ClickCounter extends Component {
  state = {
    count: 0
  }
  render() {
    return (
      <div>
        <button onClick={this.onClickButton}>Click Me</button>
        <div>
          Click Count: {this.state.count}
        </div>
      </div>
    );
  }
  onClickButton = (e) => {
    this.setState({
      count: this.state.count + 1
    })
  }
}

export default ClickCounter;