import React from 'react'
import './Button.css'

export type ButtonInput = {
  title: string,
  color?: string,
  background?: string,
  onClick: () => void,
  fontSize?: number
}

function Button(props : ButtonInput) {
  return (
    <div onClick={props.onClick} className='Button-wrapper noselect' style={{ background: props.background ?? 'var(--main-color)', color: props.color ?? 'white', fontSize: props.fontSize ?? 20 }}>
      { props.title }
    </div>
  )
}

export default Button