import React, { useRef, useState } from 'react';
import './App.css';

function Practice2() {
  const [data, setData] = useState([
    {
      id: 1,
      title: '안녕하세요',
      user: '최진',
    },
    {
      id: 2,
      title: '1월 5일',
      user: '최진',
    },
  ]);

  const [inputUser, setInputUser] = useState('');
  const [inputTitle, setInputTitle] = useState('');
  const [newId, setNewId] = useState(data.length + 1);

  const newUser = (e) => {
    console.log(e.target.value);
    setInputUser(e.target.value);
  };

  const newTitle = (e) => {
    console.log(e.target.value);
    setInputTitle(e.target.value);
  };

  // Ref 실습
  const inputRef1 = useRef();
  const inputRef2 = useRef();

  // 메모 추가
  const newMemo = () => {
    // Ref 실습
    if (inputUser.trim().length === 0) {
      inputRef1.current.focus();
    } else if (inputTitle.trim().length === 0) {
      inputRef2.current.focus();
    } else {
      console.log(inputUser.trim().length);
      const newData = data.concat({
        id: newId,
        user: inputUser,
        title: inputTitle,
      });

      setNewId(newId + 1);
      setData(newData);
      setInputUser('');
      setInputTitle('');
    }
  };

  // 4번 실습

  const [result, setResult] = useState([]);
  const [searchType, setSearchType] = useState('writer');
  const [inputSearch, setInputSearch] = useState('');

  const searchMemo = () => {
    let searchResult = data.filter((user) => {
      // if (!user[searchType].includes(inputSearch)) {
      //   return null;
      // }

      // // 검색결과 있음; 검색결과(배열) 반환
      // return user;
      if (searchType && user[searchType]) {
        return user[searchType].includes(inputSearch);
      }
      return false;
    });

    setResult(searchResult);
    setInputSearch('');
  };

  const selectSearchType = (e) => {
    // console.log(e.target.value);
    // select option 상태 설정
    setSearchType(e.target.value);
  };

  // 검색 버튼 입력 ->

  return (
    <div>
      <h1> 실습</h1>

      <fieldset>
        작성자:{' '}
        <input
          type="text"
          name=""
          id=""
          onChange={newUser}
          value={inputUser}
          ref={inputRef1}
        />
        제목:{' '}
        <input
          type="text"
          name=""
          id=""
          onChange={newTitle}
          value={inputTitle}
          ref={inputRef2}
        />
        <button onClick={newMemo}> 작성 </button>
      </fieldset>
      <br />
      <select name="type" id="" onChange={selectSearchType}>
        <option value="writer">작성자</option>
        <option value="title">제목</option>
      </select>

      <input
        type="text"
        name="search"
        id=""
        placeholder="검색어"
        value={inputSearch}
        onChange={(e) => setInputSearch(e.target.value)}
      />

      <button onClick={searchMemo}>검색</button>
      <br />
      <br />
      <p>- 전체 댓글 -</p>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        {/* <>{dataList}</> */}

        <tbody>
          {data.map((data) => {
            return (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.user}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <p>- 검색 댓글 -</p>
      {result.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {result.map((data) => {
              return (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.title}</td>
                  <td>{data.user}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
    </div>
  );
}

export default Practice2;
