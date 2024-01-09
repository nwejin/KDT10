import { useEffect, useState } from 'react';

function Practice2Child({ number }) {
  const [input, setInput] = useState('');

  useEffect(() => {
    console.log('(함수형) 컴포넌트 마운트!');
  }, []);
  //   []는 한번만 실행되도록

  useEffect(() => {
    return () => {
      console.log('(함수형) 컴포넌트 언마운트!');
    };
  }, []);

  useEffect(() => {
    console.log('(함수형) 컴포넌트 마운트 or 업데이트!');
  });

  useEffect(() => {
    console.log('(함수형) 마운트 or input 상태 변경 시 컴포넌트 업데이트');
  }, [input]);

  return (
    <>
      <div>child</div>
      <div>현재 number: {number}</div>
      <input
        type="text"
        name=""
        id=""
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  );
}

export default Practice2Child;
