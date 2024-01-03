import React, { useState } from 'react';

function Counter2() {
  const [number, setNumber] = useState(0);
  const onClickEnter = () => {
    setNumber(number + 1);
  };

  const onClickMinus = () => {
    setNumber(number - 1);
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onClickEnter}>PULS 1</button>
      <button onClick={onClickMinus}>MINUS 1</button>
    </div>
  );
}

export default Counter2;
