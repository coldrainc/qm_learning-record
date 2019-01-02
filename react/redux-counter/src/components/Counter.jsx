import React from 'react';

class Counter extends React.Component {
  render() {
    const { value, onIncrement, onDecrement } = this.props;
    return (
      <div>
        Clicked: {value.counter} times
        <p>
          <button onClick={onIncrement}>+</button>
          <button onClick={onDecrement}>-</button>
        </p>
      </div>
    );
  }
}   
export default Counter;