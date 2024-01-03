import { Component } from 'react';

class HandlerEx extends Component {
  state = {
    text: 'Hello World!',
    // text2: 'Goodbye World!',
  };

  changeText = () => {
    this.setState({ text: 'Goodbye World!' });
  };

  render() {
    const { text } = this.state;
    return (
      <div>
        <h1> 실습 1</h1>

        <h1> {text}</h1>
        <button onClick={this.changeText}>클릭</button>
      </div>
    );
  }
}

export default HandlerEx;
