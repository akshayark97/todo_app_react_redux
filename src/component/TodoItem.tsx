import React from "react";
import { useDispatch } from "react-redux";

import { deleteTodo, lineThroughTodo } from "../redux/todoAction";

type TodoItemProps = {
  todo: string;
  id: number;
  lineThrough: Boolean;
};

function TodoItem({ todo, id, lineThrough }: TodoItemProps) {
  const dispatch = useDispatch();


  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const handleClick = () => {
    dispatch(lineThroughTodo(id))
  }
  return (
    <div className="flex flex-row">
      <input className="mr-5" type="checkbox" onClick={handleClick} />
      <p key={id} onClick={() => handleDelete(id)}>
        {todo}
      </p>
    </div>
  );
}

export default TodoItem;
