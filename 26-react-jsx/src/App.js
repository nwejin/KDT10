import './App.css';

function App() {
  const name = 'jin';

  const dogname = '청군이';
  const animal = '아메리칸 코카스파니엘';

  const a = 12;
  const b = 3;

  const title = '안녕 2024년';
  const styles = {
    backgroundColor: 'yellow',
    color: 'red',
    fontSize: '40px',
  };

  const pstyle = {
    color: 'blue',
    fontWeight: '700',
  };
  const inputStyle = {
    margin: '10px auto',
    width: '200px',
  };
  return (
    <div className="App">
      {/* {JSX 문법} */}
      {/* 1. 하나로 감싸인 요소 */}
      {/* 2. javascript 표현식 사용
          - {}로 감싸면 JS 표현식 사용 가능 
          - {}에서 삼항 연산자 사용가능 (단, if문은 불가)*/}
      <div>{name} 안녕하세요! </div>
      <div>{name === 'jin' ? '최진입니다.' : '최진이 아닙니다.'}</div>
      {/* 3. style 속성 (인라인 일 경우)
          - 리액트에서 돔 요소에 스타일 적용 시 문자열이 아닌 객체로 사용
          - 스타일 속성 이름 중 하이픈(-)이 있는 경우 camelCase로 사용
          ex) font-size => fontSize
          */}
      <div
        style={{
          fontSize: '30px',
          backgroundColor: 'blue',
          color: 'white',
        }}
      >
        인라인으로 스타일을 적용했다.
      </div>
      <div style={styles}>변수를 만들어서 스타일 적용했다.</div>
      {/* 4, className 사용
          - class 속성이 아닌 className 속성 사용!
            
          5. 종료 태그가 없는 태그의 사용
          -  기존에 종료 태그가 없는 태그를 사용하더라도 종료 태그를 작성해야한다. or self-closing
          ex) <input> -> <input></input> or <input />
              <br> -> <br></br> or <br/>
          
          6. 주석
          - // : jsx 외부 주석 (return 밖)
          - 내부에서는 {}로 주석: 자동완성
            */}

      <br />
      <br />

      <p style={pstyle}>실습 1</p>
      <h2>
        제 반려동물 이름은 {dogname} 입니다.
        <br />
        {dogname}는 {animal} 입니다.
      </h2>

      <br />
      <br />

      <p style={pstyle}>실습 2</p>
      <div>
        <div>{3 + 5 === 8 ? '정답입니다!' : '오답입니다!'}</div>
      </div>

      <br />
      <br />

      <p style={pstyle}>실습 3</p>
      {/* 단축 평가 && */}
      {/* true && 반환 */}
      <div>
        <div> {a > b && 'a가 b보다 큽니다.'}</div>
      </div>

      <br />
      <br />

      <p style={pstyle}>실습 4</p>
      <div style={{ width: '500px', margin: 'auto' }}>
        <div
          style={{
            backgroundColor: 'beige',
            fontSize: '30px',
            color: 'lightsalmon',
            height: '40px',
          }}
        >
          {title}
        </div>
        <div>
          <label htmlFor="">아이디 :</label>
          <input style={inputStyle} type="text" name="" id="" />
          <br />
          <label htmlFor="">비밀번호 :</label>
          <input style={inputStyle} type="password" name="" id="" />
        </div>
      </div>
    </div>
  );
}

export default App;
