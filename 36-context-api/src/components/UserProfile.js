import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function UserProfile() {
  //  useContext 사용해서 context 값 사용
  console.log(useContext(UserContext));
  const { name, setName } = useContext(UserContext);
  return (
    <>
      <h2>사용자 프로필 </h2>
      <p>이름 : {name}</p>
      <button onClick={() => setName('청군이')}>이름 변경</button>
    </>
  );
}

export default UserProfile;
