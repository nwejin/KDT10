import { Component } from 'react';

class Practice1 extends Component {
  render() {
    return <div>{this.props.name === 'hi' ? '안녕하세요' : '누구세요?'}</div>;
  }
}

export default Practice1;
