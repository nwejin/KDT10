import './App.css';
import Counter from './Counter';
import SayFunction from './SayFunction';
import Counter2 from './Counter2';
import Practice1 from './Practice1';
import Practice2 from './Practice2';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <hr />
      <SayFunction></SayFunction>

      <hr />
      <Counter2 />

      <hr />
      <Practice1></Practice1>

      <hr />
      <Practice2></Practice2>
    </div>
  );
}

export default App;
