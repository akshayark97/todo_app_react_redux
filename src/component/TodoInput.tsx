import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoAction'

import Button from './Button'
import Input from './Input'

export default function TodoInput() {

  const [inputValue, setInputValue] = useState<string>('')
  
  const dispatch = useDispatch()

  function addTask(event:any) {
    if(inputValue !== ''){
      event.preventDefault()
      dispatch(addTodo(inputValue))
      setInputValue('')
    }
  }
  const handleClick = (event:any) => {
    addTask(event)
  }

  const handleOnKeyPress = (event:any) => {
    if(event.key === "Enter"){
      addTask(event)
    }
  }

  return (
    <div className='flex flex-row justify-center'>
        <Input placeholder="Enter your goal here" inputValue={inputValue} setInputValue={setInputValue} onKeyPress={handleOnKeyPress}/>
        <Button value="Add" onClick={handleClick}/>
    </div>
  )
}
