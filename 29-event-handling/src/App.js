import './App.css';
import SyntheticEvent from './SyntheticEvent';
import ClassBind from './ClassBind';
import Counter from './Counter';
import HandlerEx from './components/ex/HandlerEx';
import Practice2 from './components/ex/Practice2';
import Practice3 from './components/ex/Practice3';

function App() {
  return (
    <div className="App">
      <hr />
      <SyntheticEvent />

      <hr />
      <ClassBind />

      <hr />
      <Counter />

      <hr />
      <HandlerEx />

      <hr />
      <Practice2 />

      <hr />
      <Practice3 />
    </div>
  );
}

export default App;
