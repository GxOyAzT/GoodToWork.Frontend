import React from 'react'
import './TextInput.css'

export type TextInputInput = {
  Title?: string,
  ActualValue: string
  OnChange: (vewValue: string) => void
}

function TextInput(props: TextInputInput) {
  return (
    <div className='TextInput-warpper'>
      <div className='TextInput-title noselect'>{props.Title}</div>
      <div className='TextInput-topSpace'></div>
      <input className='TextInput-input' type='text' value={props.ActualValue} onChange={e => props.OnChange(e.target.value)}/>
    </div>
  )
}

export default TextInput