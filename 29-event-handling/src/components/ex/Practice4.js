import React, { useState } from 'react';
// import Input from '../ex/Input';

function Practice4() {
  // 개별 요소로 관리
  const [img, setFruit] = useState('');

  function fruitImg(e) {
    console.log(e.target.value);
    if (e.target.value === 'fruit1') {
      setFruit(
        'https://m.eejmall.com/web/product/big/201708/209_shop1_268689.jpg'
      );
    } else if (e.target.value === 'fruit2') {
      setFruit(
        'https://img.khan.co.kr/news/2023/09/27/l_2023092801001014200092871.jpg'
      );
    } else if (e.target.value === 'fruit3') {
      setFruit(
        'https://cdn.healthinnews.co.kr/news/photo/202307/39252_40878_352.jpg'
      );
    } else if (e.target.value === 'fruit4') {
      setFruit(
        'https://img.segye.com/content/image/2017/08/30/20170830515039.jpg'
      );
    }
  }

  const [color, setBackC] = useState('black');
  const setBack = (e) => {
    console.log(e.target.value);
    setBackC(e.target.value);
  };

  const [color2, setTextC] = useState('white');
  const setTextColor = (e) => {
    console.log(e.target.value);
    setTextC(e.target.value);
  };

  const [text, setText] = useState('text');
  const inputValue = (e) => {
    setText(e.target.value);
  };

  // 객체로 데이터 관리
  // const [data, setData] = useState({
  //   img: '',
  //   background: 'black',
  //   color: 'white',
  //   content: 'TEXT',
  // });

  // props 를 사용하기 위해서는 부모-자식으로 나눠야한다.
  // setData 함수를 넘겨줘야지 state 변경이 가능!!

  return (
    <div>
      <h1> 실습 4</h1>

      <label htmlFor="fruits">과일 :</label>
      <select name="" id="fruits" onChange={fruitImg}>
        <option value="fruit1">복숭아</option>
        <option value="fruit2">사과</option>
        <option value="fruit3">바나나</option>
        <option value="fruit4">포도</option>
      </select>

      <label htmlFor="colors">배경색 :</label>
      <select name="" id="colors" onChange={setBack}>
        <option value="red">빨강</option>
        <option value="blue">파랑</option>
        <option value="yellow">노랑</option>
        <option value="black">검정</option>
      </select>

      <label htmlFor="textC">글자색 :</label>
      <select name="" id="textC" onChange={setTextColor}>
        <option value="white">하양</option>
        <option value="blue">파랑</option>
        <option value="pink">핑크</option>
        <option value="green">초록</option>
      </select>
      <br />
      <br />
      <label htmlFor="desc">내용 :</label>
      <input
        type="text"
        name=""
        id="desc"
        onChange={inputValue}
        placeholder="내용을 입력하세요"
      />
      <br />
      <br />
      <img src={img} alt="" />
      <br />

      <div
        style={{
          backgroundColor: `${color}`,
          width: '150px',
          height: '50px',
          margin: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span style={{ color: `${color2}` }}>{text}</span>

        {/* <Input setData={setData}></Input> */}

        {/* props 사용하게 파일 나눠서 실습 하기 */}
      </div>
    </div>
  );
}

export default Practice4;
