import { useContext } from 'react';
import { ThemeContext } from '../App';

function Mypage() {
  const theme = useContext(ThemeContext);
  return (
    <label>
      <input type="checkbox" checked={theme === 'dark'} name="" id="" />
    </label>
  );
}

export default Mypage;
