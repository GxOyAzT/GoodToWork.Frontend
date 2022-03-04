import { useState } from 'react'
import './TextInput.css'

export type TextInputInput = {
  title?: string,
  actualValue: string
  onChange: (vewValue: string) => void
}

function TextInput(props: TextInputInput) {
  const [isFocus, setIsFocus] = useState<boolean>(false)

  return (
    <div className={`TextInput-warpper ${isFocus ? 'TextInput-warpper-focus' : 'TextInput-warpper-nofocus'}`}>
      <div className={`TextInput-title noselect ${isFocus ? 'TextInput-title-focus' : 'TextInput-title-nofocus'}`}>{props.title}</div>
      <div className='TextInput-topSpace'></div>
      <input onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)} readOnly={props.onChange == null} className='TextInput-input' type='text' value={props.actualValue} onChange={e => props.onChange(e.target.value)}/>
    </div>
  )
}

export default TextInput