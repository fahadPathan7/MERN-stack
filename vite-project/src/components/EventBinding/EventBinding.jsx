/*
    In this file, I used normal function to handle the event binding.
    ES6 class does not need to bind the event handler in the constructor.
    I used the bind() method to bind the event handler.
*/

import React, { Component } from "react";

class EventBinding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // this.HandleClick = this.HandleClick.bind(this); // binding the event handler in the constructor
  }

  HandleClick() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.HandleClick.bind(this)}>Click Me</button>
      </div>
    );
  }
}

export default EventBinding;
