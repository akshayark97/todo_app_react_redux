import React from 'react'

type UserInput = {
    placeholder: string;
    inputValue: string;
    setInputValue: any;
}

export default function Input({ placeholder, inputValue, setInputValue}: UserInput) {

  const handleChange = (event: any) => {
    setInputValue(event.target.value)
  }

  return (
    <div>
        <input className="mr-3 p-2 w-96 border-black border-2 rounded-sm" type="text" value={inputValue} placeholder={placeholder} onChange={handleChange}/>
    </div>
  )
}
