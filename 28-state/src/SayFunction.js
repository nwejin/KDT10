import React, { useState } from 'react';

function SayFunction() {
  console.log(useState('welcome!')); // ['welcome!', function]
  const [message, setMessage] = useState('welcome!');
  //   message: 메세지 상태
  // serMessage(): message state값을 바꾸는 함수

  const onClickEnter = () => {
    setMessage('안녕하세요~');
  };

  const onClickLeave = () => {
    setMessage('잘가~');
  };

  return (
    <div>
      {/*react에서의 onClick 함수에는 괄호가 없다.
        - HTML: onclick="onclickEnter()" -> 문자열 형식으로 호출문 등록
        - JS: addEventListener('click', onclickEnter) -> 괄호를 없애서 함수를 바로 실행하지 않고, 클릭이 발생했을때, 함수 호출되도록

        - REACT: onClick={onclickEnter} -> 괄호를 없애서 함수가 바로 실행되지 않도록 (JS와 동일) // 만약 괄호가 있으면 함수가 바로실행된다


         */}
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
}

export default SayFunction;
