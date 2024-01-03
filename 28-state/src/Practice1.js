import React, { Component } from 'react';

class Practice1 extends Component {
  state = {
    number: 0,
  };
  render() {
    const { number } = this.state;

    const P2 = () =>
      this.setState({
        number: number + 2,
      });

    const M1 = () =>
      this.setState({
        number: number - 1,
      });

    return (
      <div>
        <h3> 실습 1</h3>
        <h1>{number}</h1>
        <button onClick={P2}>+2</button>
        <button onClick={M1}>-1</button>
      </div>
    );
  }
}

export default Practice1;
