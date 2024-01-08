import React, { Component } from 'react';

class RefClass1 extends Component() {
  // 클래스형 컴포넌트 - 콜백함수를 이용한 ref

  handelFocus = () => {
    console.log(this); // RefClass1 컴포넌트
    this.myInput.focus();
  };

  render() {
    return (
      <>
        <p>(클래스형 컴포넌트) 버튼 클릭시 input에 focus 처리</p>
        {/* 만들어진 변수 myInput 해당 요소의 ref prop로 넣어주면 ref 설정 완료 */}
        <input
          type="text"
          ref={(ref) => {
            this.myInput = ref;
          }}
        />
        <button onClick={this.handelFocus}> 제출하기</button>
      </>
    );
  }
}

export default RefClass1;
