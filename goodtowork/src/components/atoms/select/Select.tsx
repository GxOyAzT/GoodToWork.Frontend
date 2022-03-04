import './Select.css'

export type Option = {
  id: string
  name: string
}

export type SelectInput = {
  options: Option[],
  selected: string,
  onSelect: (option: string) => void
}

const Select = (props: SelectInput) => {
  return (
    <div className='Select-wrapper'>
      {
        props.options.map(option => 
          <div className={`Select-option ${props.selected === option.id ? 'Select-option-selected' : ''} noselect`} onClick={() => props.onSelect(option.id)}>
            {option.name}
          </div>
        )
      }
    </div>
  )
}

export default Select