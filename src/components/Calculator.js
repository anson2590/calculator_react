import React, { Component } from 'react';
import '../css/Common.css';

class Calculator extends  Component {
  constructor() {
    super();
    this.state = {
      input: '',
      output: ''
    };
    this.onClickClear = this.onClickClear.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onCalculationClick = this.onCalculationClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  onClickClear = () => {
    this.setState({
      input: '',
      output: ''
    })
  };

  onButtonClick = value => {
    let a = this.state.input + value;
    this.setState({
      input: a
    })
  };

  onCalculationClick = () => {
    this.setState({
      output: eval(this.state.input)
    })
  };

  onDeleteClick = () => {
    var tmp = this.state.input;
    this.setState({
      input: this.state.input.substr(0, tmp.length - 1)
    })
  };

  render() {
    return(
      <div align="center" className='frame'>
        <table width="25%" border="1px">
          <tr>
            <td colspan="4"><input type="text" value={this.state.input} readOnly /></td>
          </tr>

          <tr>
            <td colspan="4"><input type="text" value={this.state.output} readOnly /></td>
          </tr>

          <tr>
            <td><button id='button' onClick={this.onClickClear}>Clear</button></td>
            <td><button id='button' onClick={this.onDeleteClick}>Delete</button></td>
            <td><button id='button' onClick={() => this.onButtonClick('.')}>.</button></td>
            <td><button id='button' onClick={() => this.onButtonClick('/')}>/</button></td>
          </tr>

          <tr>
            <td><button id='button' onClick={() => this.onButtonClick(7)}>7</button></td>
            <td><button id='button' onClick={() => this.onButtonClick(8)}>8</button></td>
            <td><button id='button' onClick={() => this.onButtonClick(9)}>9</button></td>
            <td><button id='button' onClick={() => this.onButtonClick('*')}>*</button></td>
          </tr>

          <tr>
            <td><button id='button' onClick={() => this.onButtonClick(4)}>4</button></td>
            <td><button id='button' onClick={() => this.onButtonClick(5)}>5</button></td>
            <td><button id='button' onClick={() => this.onButtonClick(6)}>6</button></td>
            <td><button id='button' onClick={() => this.onButtonClick('-')}>-</button></td>
          </tr>

          <tr>
            <td><button id='button' onClick={() => this.onButtonClick(1)}>1</button></td>
            <td><button id='button' onClick={() => this.onButtonClick(2)}>2</button></td>
            <td><button id='button' onClick={() => this.onButtonClick(3)}>3</button></td>
            <td><button id='button' onClick={() => this.onButtonClick('+')}>+</button></td>
          </tr>

          <tr>
            <td></td>
            <td><button id='button' onClick={() => this.onButtonClick(0)}>0</button></td>
            <td><button id='button' onClick={this.onCalculationClick}>=</button></td>
            <td></td>
          </tr>
        </table>
      </div>
    )
  }
};

export default Calculator;
