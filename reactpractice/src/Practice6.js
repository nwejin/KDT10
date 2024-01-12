import { useState } from 'react';

function Practice6() {
  // state에 색, 텍스트 저장
  const [color, setColor] = useState({ color: 'black', text: '검정색' });

  const [status, setStatus] = useState({ display: 'block', text: '숨기기' });

  //setColor 정의
  const changeColor = (color, obj) => {
    setColor({ color: color, text: obj.innerText });
    console.log(obj.innerText); // text
    console.log(obj); // e.target
  };

  const changeStatus = (display, text) => {
    setStatus({ display, text });
  };

  return (
    <>
      <h1 style={{ display: status.display }}>
        <span style={{ color: color.color }}>{color.text}</span> 글씨
      </h1>
      <button
        onClick={(e) => {
          changeColor('red', e.target);
        }}
      >
        빨간색
      </button>
      <button
        onClick={(e) => {
          changeColor('blue', e.target);
        }}
      >
        파란색
      </button>
      <button
        onClick={(e) => {
          changeStatus('none', '보이기');
        }}
      >
        {' '}
        {status.text}{' '}
      </button>
    </>
  );
}

export default Practice6;
