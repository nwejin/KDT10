import { useSelector, useDispatch } from 'react-redux';

function Practice1() {
  const visible = useSelector((state) => state.practice.visible);

  console.log('visible', visible);

  return (
    <div className="App">
      <h1>Practice1</h1>
      <h2>isVisible 값은 "{visible ? '참' : '거짓'}"이다</h2>
      <Box1 />
    </div>
  );
}

const Box1 = () => {
  return (
    <div className="Box1">
      <h2>Box1</h2>
      <Box2></Box2>
    </div>
  );
};

const Box2 = () => {
  return (
    <div className="Box1">
      <h2>Box2</h2>
      <Box3></Box3>
    </div>
  );
};

const Box3 = () => {
  return (
    <div className="Box1">
      <h2>Box3</h2>
      <Box4></Box4>
    </div>
  );
};

const Box4 = () => {
  const visible = useSelector((state) => state.practice.visible);
  const dispatch = useDispatch();

  return (
    <div className="Box1">
      <h2>isVisible 값은 "{visible ? '참' : '거짓'}"이다</h2>
      <button onClick={() => dispatch({ type: 'practice/change' })}>
        change
      </button>
    </div>
  );
};

export default Practice1;
