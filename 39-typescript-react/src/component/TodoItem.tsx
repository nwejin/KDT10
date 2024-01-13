import { TodoItemProp } from '../types/types';

interface Props {
  todo: TodoItemProp;
  toggleTodo: (id: number) => void;
}

function TodoItem({ todo, toggleTodo }: Props) {
  return (
    <>
      <li>
        <label htmlFor="">
          <input
            type="checkbox"
            defaultChecked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            name=""
            id=""
          />
          {todo.content}
        </label>
      </li>
    </>
  );
}

export default TodoItem;
