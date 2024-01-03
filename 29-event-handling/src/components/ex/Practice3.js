import React, { useState } from 'react';

function Practice3() {
  const [text, setText] = useState('안녕하세요');

  const changeText = (e) => {
    setText('');
    console.log(e);
    const eText = e.target.innerText;
    console.log(eText);
    e.target.innerText = '보여라';
  };
  return (
    <div>
      <h1> 실습 3</h1>

      <button onClick={changeText}>
        <span>사라져라</span>
      </button>
      <h1>{text}</h1>
    </div>
  );
}

// 다르게 해보기

export default Practice3;
