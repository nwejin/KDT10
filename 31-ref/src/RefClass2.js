import React, { Component } from 'react';

class RefClass2 extends Component() {
  myInput = React.createRef();

  handelFocus = () => {
    // ref를 설정한 DOM에 접근하기 위해서는 this.myInput.currend 이용
    console.log(this.myInput.current);
    this.muInput.current.focus();
  };

  render() {
    return (
      <>
        <p>(클래스형 컴포넌트) 버튼 클릭시 input에 focus 처리</p>
        {/* 만들어진 변수 myInput 해당 요소의 ref prop로 넣어주면 ref 설정 완료 */}
        <input type="text" ref={this.myInput} />
        <button onClick={this.handelFocus}> 제출하기</button>
      </>
    );
  }
}

export default RefClass2;
