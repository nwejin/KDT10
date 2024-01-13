import { useState } from 'react';
import { TodoItemProp } from '../types/types';
import TodoItem from './TodoItem';

function TodoList() {
  const [todos, setTodos] = useState<TodoItemProp[]>([
    { id: 1, content: '첫번재 메모', completed: false },
    { id: 2, content: '두번째 메모', completed: true },
  ]);

  const [newTodo, setNewTodo] = useState<string>('');

  const addTodo = () => {
    const updateTodo = [
      ...todos,
      { id: Date.now(), content: newTodo, completed: false },
    ];
    setTodos(updateTodo); // 전체 Todo에 새로운 Todo 추가
    setNewTodo(''); // 초기화
  };

  const toggleTodo = (targetId: number) => {
    const updateTodo = todos.map((todo) => {
      return todo.id === targetId
        ? { ...todo, completed: !todo.completed }
        : todo;
    });
    setTodos(updateTodo);
    console.log(updateTodo);
  };

  return (
    <>
      <h1>이게 무엇일까</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
      />

      <button onClick={addTodo}> add</button>
      {todos.map((value) => (
        <TodoItem
          key={value.id}
          todo={value}
          toggleTodo={toggleTodo}
        ></TodoItem>
      ))}
    </>
  );
}

export default TodoList;
