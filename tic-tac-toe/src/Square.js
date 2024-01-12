// i 값을 받아서 value 안에 표시
import { useState } from 'react';

function Square(props) {
  const [value, setValue] = useState();

  return (
    <button
      className="square"
      onClick={() => {
        props.onClick();
        setValue('x');
        // console.log(props);
      }}
    >
      {value}
    </button>
  );
}

export default Square;
