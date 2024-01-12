import React, { useState } from 'react';

function Practice4() {
  const [message, setMessage] = useState();
  const [number, setNumber] = useState(0);
  return (
    <>
      <div>안녕하세요</div>
      <button
        onClick={() => {
          setMessage('입장이 완료되었습니다.');
        }}
      >
        들어가기
      </button>
      <button
        onClick={() => {
          setMessage('퇴장이 완료되었습니다.');
        }}
      >
        나가기
      </button>
      <div>{message}</div>

      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        {' '}
        + 1
      </button>
      <button
        onClick={() => {
          setNumber(number - 2);
        }}
      >
        {' '}
        - 2
      </button>
      <div>{number}</div>
    </>
  );
}

export default Practice4;
