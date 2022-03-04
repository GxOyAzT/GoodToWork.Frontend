import { useState } from 'react'
import './TextAreaInput.css'

export type TextAreaInputInput = {
  title?: string,
  actualValue: string
  onChange: (vewValue: string) => void
}

function TextAreaInput(props: TextAreaInputInput) {
  const [isFocus, setIsFocus] = useState<boolean>(false)

  return (
    <div className={`TextAreaInput-warpper ${isFocus ? 'TextAreaInput-warpper-focus' : 'TextAreaInput-warpper-nofocus'}`}>
      <div className={`TextAreaInput-title noselect ${isFocus ? 'TextAreaInput-title-focus' : 'TextAreaInput-title-nofocus'}`}>{props.title}</div>
      <div className='TextAreaInput-topSpace'></div>
      <textarea onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)} className='TextAreaInput-input' value={props.actualValue} onChange={e => props.onChange(e.target.value)}/>
    </div>
  )
}

export default TextAreaInput