import React, { Component } from 'react';
import Header from './Header';
import Calculator from './Calculator';

class Main extends Component {
  render() {
    return(
      <React.Fragment>
        <Header/>
        <Calculator/>
      </React.Fragment>
    )
  }
}

export default Main;
