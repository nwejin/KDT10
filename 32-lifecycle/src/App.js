import LifeCycleClass from './LifeCycleClass';
import LifeCycleFunc from './LifeCycleFunc';

// 혼자 해보기
import Practice1 from './Practice1';
import Practice2 from './Practice2';

function App() {
  return (
    <div className="App">
      {/* 클래스형 컴포넌트 라이프사이클 */}
      <LifeCycleClass />

      <h1>실습 (class 방식)</h1>
      <Practice1></Practice1>
      <hr />

      {/* 함수형 컴포넌트 라이프사이클 */}
      <LifeCycleFunc />

      <h1>실습 (function 방식)</h1>
      <Practice2></Practice2>
    </div>
  );
}

export default App;
