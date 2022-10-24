import React from 'react'

type ButtonClick = {
    onClick: any;
    value: string
}

export default function Button({ onClick, value } : ButtonClick) {
  return (
    <div className="mt-0.5">
        <button className="bg-blue-500 text-white pl-2 pr-3 text-center h-10 rounded-md" onClick={onClick}>{value}</button>
    </div>
  )
}
