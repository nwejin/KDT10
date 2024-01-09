import { useState } from 'react';
import Practice2Child from './Practice2Child';

function Practice2() {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);

  const changeNumber = () => {
    setNumber(number + 1);
  };

  const changeVisible = () => {
    setVisible(!visible);
  };
  return (
    <>
      <button onClick={changeNumber}>숫자 증가</button>
      <button onClick={changeVisible}>숨김</button>

      {/* 숫자 넘겨주기 */}
      {visible && <Practice2Child number={number} />}
    </>
  );
}

export default Practice2;
