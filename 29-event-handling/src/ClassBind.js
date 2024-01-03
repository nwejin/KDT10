import { Component } from 'react';

class ClassBind extends Component {
  state = {
    name: 'codingon',
  };

  // 클래스 컴포넌트에서 이벤트 쓰기 - 화살표 함수 사용 (자동 bind )
  printConsole = () => {
    // this는 현재 컴포넌트
    console.log('this', this);
    console.log('state', this.state);
  };

  // 클래스 컴포넌트에서 이벤트 쓰기 - bind 사용 (render 안에서 bind)
  printConsole2() {
    console.log('this', this);
    console.log('state', this.state);
  }

  //인자 전달
  printConsole3 = (msg) => {
    console.log('msg', msg);
    console.log('this', this);
    console.log('state', this.state);
  };

  render() {
    return (
      <div>
        <h1>Class Component Event</h1>
        <button onClick={this.printConsole}>PrintConsole 인자(X)</button>
        <button onClick={this.printConsole2.bind(this)}>
          PrintConsole2 인자(X)
        </button>
        <button onClick={() => this.printConsole3('hello')}>
          PrintConsole3 인자(0)
        </button>
      </div>
    );
  }
}

export default ClassBind;
