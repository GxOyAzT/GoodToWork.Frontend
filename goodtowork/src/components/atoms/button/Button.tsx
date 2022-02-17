import React from 'react'
import './Button.css'

export type ButtonInput = {
  Title: string,
  Color?: string,
  Background: string,
  OnClick: () => void
}

function Button(props : ButtonInput) {
  return (
    <div onClick={props.OnClick} className='Button-wrapper noselect' style={{ background: props.Background, color: props.Color ?? 'white' }}>
      { props.Title }
    </div>
  )
}

export default Button