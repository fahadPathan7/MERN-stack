import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    const { count } = this.state;
    return (
    <div>
        <h2>{count}</h2>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={() => this.setState({ count: count - 1 })} disabled={count===0? true : false}>Decrement</button>
    </div>
    );
  }
}
