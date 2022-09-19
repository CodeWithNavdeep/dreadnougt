import React from 'react'

export const Button = (props) => {
  return (
    <button className={props.classes} onClick={props.callme} style={{borderRadius:`${props.borderRadius}`, width:`${props.width}`,height:`${props.height}`}}>{props.title}</button>
  )
}


