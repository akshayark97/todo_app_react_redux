import React from "react";
import { connect } from "react-redux";

import TodoItem from "./TodoItem";

function TodoList(props: any) {

  const { todos, lineThrough } = props;

  return (
    <ul className="ml-24 mt-5">
      {todos.map((todo: string, id: number) => (
        <div key={id}>
          <TodoItem todo={todo} id={id} lineThrough={lineThrough} />
        </div>
      ))}
    </ul>
  );
}

const mapStateToProps = (state: any) => {
  return {
    ...state,
    todos: state.todos,
    lineThrough: state.lineThrough,
  };
};

export default connect(mapStateToProps)(TodoList);
