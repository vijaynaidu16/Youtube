import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='px-5 py-1 m-2 bg-gray-600 rounded-lg text-slate-50'>{name}</button>
    </div>
  )
}

export default Button