import './style/App.css';
import { useState } from 'react';
import './style/Box.css';

function App() {
  const [number, setNumber] = useState(0);

  const plus = () => {
    setNumber(number + 1);
  };

  const minus = () => {
    setNumber(number - 1);
  };

  const init = () => {
    setNumber(0);
  };

  return (
    <div className="App">
      <h1>React State Ex</h1>
      <Box1 number={number} plus={plus} minus={minus} init={init}></Box1>
    </div>
  );
}

const Box1 = ({ number, plus, minus, init }) => {
  return (
    <div className="Box">
      <h2>Box1: {number}</h2>
      <Box2 number={number} plus={plus} minus={minus} init={init}></Box2>
    </div>
  );
};

const Box2 = ({ number, plus, minus, init }) => {
  return (
    <div className="Box">
      <h2>Box2: {number}</h2>
      <Box3 number={number} plus={plus} minus={minus} init={init}></Box3>
    </div>
  );
};

const Box3 = ({ number, plus, minus, init }) => {
  return (
    <div className="Box">
      <h2>Box3: {number}</h2>
      <Box4 number={number} plus={plus} minus={minus} init={init}></Box4>
    </div>
  );
};

const Box4 = ({ number, plus, minus, init }) => {
  return (
    <div className="Box">
      <h2>Box4: {number}</h2>
      <button onClick={plus}>PLUS</button>
      <button onClick={minus}>MINUS</button>
      <button onClick={init}>초기화</button>
    </div>
  );
};
export default App;
