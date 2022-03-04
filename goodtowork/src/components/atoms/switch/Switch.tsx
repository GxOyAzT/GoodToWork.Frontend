import './Switch.css'

type SwitchProps = {
  value: boolean
  OnChange: () => void 
}

const Switch = (props : SwitchProps) => {
  return (
    <div className='Switch-wrapper' onClick={() => props.OnChange() }>
      {
        props.value ? 
        <div className='Switch-line-left'></div>
        :
        <div className='Switch-line-right'></div>
      }
    </div>
  )
}

export default Switch