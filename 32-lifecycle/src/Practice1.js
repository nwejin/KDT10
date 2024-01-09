import { Component } from 'react';
import Practice1Child from './Practice1Child';

class Practice1 extends Component {
  state = {
    number: 0,
    visible: true,
  };

  changeNumber = () => this.setState({ number: this.state.number + 1 });
  // 숫자 가져오기

  changeVisible = () => this.setState({ visible: !this.state.visible });
  // visible 가져오기

  render() {
    return (
      <>
        <button onClick={this.changeNumber}>숫자 증가</button>
        <button onClick={this.changeVisible}>전원</button>
        {/* visible 값이 true 일 경우 아래 보여주기 */}
        {this.state.visible && <Practice1Child number={this.state.number} />}
      </>
    );
  }
}

export default Practice1;
