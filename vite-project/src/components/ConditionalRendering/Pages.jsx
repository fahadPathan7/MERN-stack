import React, { Component } from 'react'

// internal import
import LoginPage from './LoginPage';
import HomePage from './HomePage';

class Pages extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

  render() {
    let { isLoggedIn } = this.state;
    let element;
    if (isLoggedIn) {
        element = <HomePage />
    } else {
        element = <LoginPage />
    }
    return (
      <div>
        {element}
      </div>
    )
  }
}

export default Pages
