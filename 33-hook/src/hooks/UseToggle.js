import { useState } from 'react';

// 현재 실습에서 useToggle은 함수로 생각!
function UseToggle(initValue = false) {
  // value : 토글의 상태
  // setValue : 토글 상태를 변화시키는 setter
  const [value, setValue] = useState(initValue);

  const toggleValue = () => {
    setValue(!value);
  };
  return [value, toggleValue];
}

export default UseToggle;
