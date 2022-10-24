import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoAction'
import { nanoid } from 'nanoid'

import Button from './Button'
import Input from './Input'

export default function TodoInput() {

  const [inputValue, setInputValue] = useState<string>('')
  
  const dispatch = useDispatch()

  const handleClick = (event:any) => {
    event.preventDefault()
    dispatch(addTodo(inputValue))
    setInputValue('')
    // addTodo(inputValue)
  }

  return (
    <div className="mt-10 flex flex-row justify-center">
        <Input placeholder="Enter your goal here" inputValue={inputValue} setInputValue={setInputValue} />
        <Button value="Add" onClick={handleClick}/>
    </div>
  )
}