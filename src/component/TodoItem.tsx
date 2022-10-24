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

  return (
      <p className="shadow-xl mb-5 w-96 shadow-blue-300 text-sky-900 font-sans font-bold p-2" key={id} onClick={() => handleDelete(id)}>
        {todo}
      </p>
  );
}

export default TodoItem;
