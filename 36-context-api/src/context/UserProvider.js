import { useState } from 'react';
import { UserContext } from './UserContext';

function UserProvider({ children }) {
  // children = props.children
  // provider가 props로 value 전달

  // props 객체 형태의 children을 인자로 받아서 하위 요소로 삽입

  // defaultUser로 설정한 값 (name, setName)
  // 이름을 변경할 수 있게 useState 사용
  const [name, setName] = useState('최진');

  return (
    <UserContext.Provider value={{ name: name, setName: setName }}>
      {/* consumer or useContext를 사용해서 provider에서 넘겨준 값 사용 */}
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
