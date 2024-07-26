import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name="All"/>
      <Button name="Gaming"/>
      <Button name="BGMI"/>
      <Button name="Music"/>
      <Button name="PUBG"/>
      <Button name="News"/>
      <Button name="Cooking"/>
      <Button name="food"/>
    </div>
  )
}

export default ButtonList