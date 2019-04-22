import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  add = () => {
    this.setState({ count: this.state.count + 1})
  }

  remove = () => {
    this.setState({ count: this.state.count - 1})
  }

  render() {
    return <div>
      <button onClick={this.remove}>-</button>
      <big>{this.state.count}</big>
      <button onClick={this.add}>+</button>
    </div>
  }
}

export default Counter;
