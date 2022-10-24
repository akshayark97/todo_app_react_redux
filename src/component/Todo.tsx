import React from 'react'
import { connect } from 'react-redux'

import TodoInput from './TodoInput'
import TodoList from './TodoList'

function Todo(props: any) {

  return (
    <div className='w-1/2 border pb-10 pt-5 shadow-xl shadow-blue-300 mt-10 m-auto'>
        <TodoInput />
        <TodoList />
    </div>
  )
}

export default Todo