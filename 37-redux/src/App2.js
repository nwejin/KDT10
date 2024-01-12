import './style/Box.css';
import Box1 from './component/Box1';
import { useSelector } from 'react-redux';

function App2() {
  const number = useSelector((state) => state.counter.number);
  return (
    <div className="App">
      <h1>React Redux Ex2</h1>
      <h2>{number}</h2>
      <Box1 />
    </div>
  );
}

export default App2;
