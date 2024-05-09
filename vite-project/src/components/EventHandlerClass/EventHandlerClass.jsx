import React, { Component } from "react";

class EventHandlerClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  HandleClick = e => {
    this.setState(
      {
        value: e.target.value,
      },
      () => {
        console.log(this.state.value); // this will print the value of input field in console on every change
      }
    );
  };
  render() {
    return (
      <div>
        <input type="text" onChange={this.HandleClick} />
        <p>{this.state.value}</p>
      </div>
    );
  }
}

export default EventHandlerClass;
