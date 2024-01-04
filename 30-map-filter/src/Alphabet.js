import React, { useState } from 'react';

function Alphabet() {
  const [alphabet, setAlphabet] = useState(['b', 'a', 'n', 'a', 'n', 'a']);

  const [inputAlpha, setInputAlpha] = useState('');

  // 배열 안에 객체로 저장
  const [alphabet2, setAlphabet2] = useState([
    {
      id: 1,
      alpha: 'a',
    },
    {
      id: 2,
      alpha: 'p',
    },
    {
      id: 3,
      alpha: 'p',
    },
    {
      id: 4,
      alpha: 'l',
    },
    {
      id: 5,
      alpha: 'e',
    },
  ]);

  const addAlpha = () => {
    // input 값이 빈칸일 때alphabet2 상태가 변경되지 않도록 하기
    if (inputAlpha.trim().length === 0) return;

    const newAlpha = alphabet2.concat({
      id: alphabet2.length + 1,
      alpha: inputAlpha,
    });

    setAlphabet2(newAlpha);
    setInputAlpha('');
  };

  //   실습
  const [data, setData] = useState([
    {
      id: 1,
      name: '코디',
      email: 'codi@gamil.com',
    },
    {
      id: 2,
      name: '윤소희',
      email: 'yoonsohee@gmail.com',
    },
  ]);

  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');

  const addUser = () => {
    const newName = data.concat({
      id: data.length + 1,
      name: inputName,
    });

    const newEmail = data.concat({
      id: data.length + 1,
      emali: inputEmail,
    });

    setData(newName);

    setInputName('');
    setInputEmail('');
  };

  const handleKeydown = (e) => {
    // console.log(e.key);

    if (e.nativeEvent.isComposing) return;

    if (e.key === 'Enter') addAlpha();
  };

  const deleteAlpha = (targetId) => {
    // targetId: 삭제할 요소의 id
    const newAlpha = alphabet2.filter((alpha) => {
      return alpha.id !== targetId;
    });

    setAlphabet2(newAlpha);
  };

  return (
    <>
      <ol>
        {/* map */}
        {alphabet.map((value, idx) => {
          // 한줄일때는 return, {} 생략 가능
          return (
            <li
              key={idx}
              //   onDoubleClick={}
              //   onKeyDown={}
            >
              {value}
            </li>
          );
        })}

        {alphabet2.map((value) => {
          return (
            <li key={value.id} onDoubleClick={() => deleteAlpha(value.id)}>
              {value.alpha}{' '}
            </li>
          );
        })}
      </ol>
      <input
        type="text"
        name=""
        id=""
        placeholder="알파벳 입력"
        value={inputAlpha}
        onChange={(e) => {
          setInputAlpha(e.target.value);
        }}
        onKeyDown={handleKeydown}
      />
      <button onClick={addAlpha}>ADD</button>
      <br />
      {inputAlpha.length === 0 && <span>알파벳을 입력해주세요!</span>}
      <br />
      {null || <span>정의된 값이 없습니다.</span>}
      <br />
      <br />
      <h1>실습 </h1>
      <input
        type="text"
        name=""
        id=""
        placeholder="이름"
        value={inputName}
        onChange={(e) => {
          setInputName(e.target.value);
          console.log('name', e.target.value);
        }}
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="이메일"
        value={inputEmail}
        onChange={(e) => {
          setInputEmail(e.target.value);
          console.log('email', e.target.value);
        }}
      />
      <button onClick={addUser}>등록</button>
      <th>
        {data.map((value) => {
          //
          return (
            <tr
              key={value.id}
              // onDoubleClick={}
            >
              <td>{value.name}</td>
              <td>{value.email}</td>
            </tr>
          );
        })}
      </th>
    </>
  );
}

export default Alphabet;
