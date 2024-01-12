import { useState } from 'react';
import Selects from './Practice7-2';
import Input from './Practice7-3';
import Result from './Practice7-4';

function Practice7() {
  const [data, setData] = useState({
    fruit: 'apple',
    background: 'black',
    color: 'white',
    content: 'text',
  });

  return (
    <>
      <h1>안녕하세요</h1>
      <div>
        <Selects setData={setData}></Selects>
      </div>
      <div>
        <Input setData={setData}></Input>
      </div>
      <div>
        <Result data={data}></Result>
      </div>
    </>
  );
}

export default Practice7;
