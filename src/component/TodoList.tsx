import React from "react";
import { connect } from "react-redux";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

import TodoItem from "./TodoItem";

const itemVariants = {
  hidden: { opacity: 0 },
  visible: (custom: any) => ({
    opacity: 1,
    transition: { delay: custom },
  }),
};

function TodoList(props: any) {
  const { todos } = props;

  return (
      <ul className="ml-24 mt-5">
        {todos.map((todo: string, id: number) => (
          <AnimatePresence key={id}>
            <motion.li
              key={id}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div>
                <TodoItem todo={todo} id={id} />
              </div>
            </motion.li>
          </AnimatePresence>
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
