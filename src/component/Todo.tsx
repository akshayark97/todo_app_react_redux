import React from 'react'
import { connect } from 'react-redux'

import TodoInput from './TodoInput'
import TodoList from './TodoList'

function Todo(props: any) {

  return (
    <div className='container'>
        <TodoInput />
        <TodoList />
    </div>
  )
}

export default Todo