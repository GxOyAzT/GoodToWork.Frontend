import React from 'react'
import './TextAreaInput.css'

export type TextAreaInputInput = {
  Title?: string,
  ActualValue: string
  OnChange: (vewValue: string) => void
}

function TextAreaInput(props: TextAreaInputInput) {
  return (
    <div className='TextAreaInput-warpper'>
      <div className='TextAreaInput-title noselect'>{props.Title}</div>
      <div className='TextAreaInput-topSpace'></div>
      <textarea className='TextAreaInput-input' value={props.ActualValue} onChange={e => props.OnChange(e.target.value)}/>
    </div>
  )
}

export default TextAreaInput