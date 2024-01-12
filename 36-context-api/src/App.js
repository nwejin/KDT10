import { createContext, useState } from 'react';
import UserProvider from './context/UserProvider';
import UserProfile from './components/UserProfile';
import Form from './components/Form';

function App() {
  const MyContext = createContext('defaultValue');
  console.log(MyContext);

  const [theme, setTheme] = useState('light');
  return (
    <div className="App">
      {/* 
    provider : 하위 친구들이 사용
    consumer / useContext: 값 사용 변경

    UserProvider에서 value prop으로 넘겨준 값을 UserProfile에서 Consumer 또는 UseContext 사용해서 context 값을 쓸수있음
    */}
      <UserProvider>
        <UserProfile></UserProfile>
      </UserProvider>

      {/* 리액트 예시 */}
      <ThemeContext.Provider value={theme}>
        <Form />
        <label>
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={(e) => {
              setTheme(e.target.checked ? 'dark' : 'light');
            }}
          />
          테마 변경하기
        </label>
      </ThemeContext.Provider>
    </div>
  );
}

export const ThemeContext = createContext(null);
export default App;
