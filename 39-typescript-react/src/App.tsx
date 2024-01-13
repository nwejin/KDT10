import React from 'react';
import Student from './component/Student';
import TodoList from './component/TodoList';

function App() {
  const handleClick = (name: string, grade: number) => {
    alert(`이 학생의 이름은 ${name}이고, ${grade}학년이다. `);
  };

  return (
    <div className="App">
      <Student
        name="최진"
        grade={4}
        subject="수학"
        handleClick={handleClick}
      ></Student>
      <Student name="청군이" grade={11}></Student>
      <TodoList />
    </div>
  );
}

export default App;
