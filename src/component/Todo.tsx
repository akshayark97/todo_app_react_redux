import React from 'react'

import TodoInput from './TodoInput'
import TodoList from './TodoList'

function Todo() {

  return (
    <div className='w-1/2 border pb-10 pt-5 shadow-xl shadow-blue-300 mt-10 m-auto bg-blue-100'>
        <TodoInput />
        <TodoList />
    </div>
  )
}

export default Todo