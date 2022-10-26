import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { deleteTodo } from "../redux/todoAction";

type TodoItemProps = {
  todo: string;
  id: number;
};

function TodoItem({ todo, id }: TodoItemProps) {
  const [isChecked, setIsChecked] = useState(false)

  const dispatch = useDispatch();


  const handleDelete = (id:number) => {
    setIsChecked(true)
    setTimeout(() => {
      dispatch(deleteTodo(id));
      setIsChecked(false)
    }, 500)
  };

  return (
      <p className="flex flex-row shadow-xl mb-5 w-96 shadow-blue-300 text-sky-900 font-sans font-bold p-2 bg-slate-300" key={id}>
        <input className="mr-3 ml-2" type="checkbox" checked={isChecked} onChange={() => handleDelete(id)} />
        <p className={isChecked ? "line-through" : ""}>{todo}</p>
      </p>
  );
}

export default TodoItem;
