import React, { Component } from 'react';

class Practice5 extends Component {
  state = {
    text: 'Hello World',
    year: 2024,
  };

  render() {
    const changeState = (e) => {
      console.log(this.state.text);
      this.setState({ text: 'Goodbye World', year: year + 1 });
    };

    const { text, year } = this.state;

    return (
      <>
        <div>{text}</div>
        <div>{year}</div>
        <button onClick={changeState}>클릭</button>
      </>
    );
  }
}

export default Practice5;
