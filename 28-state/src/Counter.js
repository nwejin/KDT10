import React, { Component } from 'react';

class Counter extends Component {
  state = {
    // 초기값
    number: 0,
  };
  render() {
    const { number } = this.state;

    return (
      <div>
        <h1> {number}</h1>
        {/* this.setState(): state값을 바꾸는 함수 */}
        {/* state 값을 직접 변경 불가능 */}
        {/* setstate로 변경한 값은 새로고침하면 초기화된다. */}
        {/* 클래스형에서는 화살표 함수 사용 권장 */}
        <button
          onClick={() =>
            this.setState({
              number: number + 1,
            })
          }
        >
          +1
        </button>
        <button
          onClick={() =>
            this.setState({
              number: number - 1,
            })
          }
        >
          -1
        </button>
      </div>
    );
  }
}

export default Counter;
