import { useState, useContext } from 'react'
import { UserDto } from '../../../../../models/dtos/user/UserDto'
import { UserContext } from '../../../../../contexts/user/UserContext'
import { FetchData } from '../../../../../data/fetch/FetchData'
import TextInput from '../../../../atoms/text/TextInput'
import TextAreaInput from '../../../../atoms/textArea/TestAreaInput'
import Select from '../../../../atoms/select/Select'

import './ProblemCreatePanel.css'
import Button from '../../../../atoms/button/Button'

export type ProblemCreatePanelInput = {
  performers: UserDto[],
  projectId: string,
  backEvent: () => void
}

const ProblemCreatePanel = (props : ProblemCreatePanelInput) => {
  const [model, setModel] = useState({ title: '', description: '', performerId: '00000000-0000-0000-0000-000000000000' })

  const user = useContext(UserContext)

  const createProblem = async () => {
    const response = await FetchData(`problem/create`, 'POST', {
      ...model,
      projectId: props.projectId,
      senderId: user?.userId
    })

    if(response.StatusCode === 200) {
      props.backEvent()
      return
    }
    
    console.log(response)
  }

  return (
    <div className='ProblemCreatePanel-wrapper'>
      <div>
        <button onClick={() => props.backEvent()}>BACK</button>
      </div>
      <div className='ProblemCreatePanel-center'>
        <TextInput title='TITLE' actualValue={model.title} onChange={(newValue) => setModel({...model, title: newValue})}/>
        <div style={{ height: 13 }}></div>
        <TextAreaInput title='DESCRIPTION' actualValue={model.description} onChange={(newValue) => setModel({...model, description: newValue})}/>
        <div style={{ height: 13 }}></div>
        <Select options={props.performers} selected={model.performerId} onSelect={newValue => setModel({...model, performerId: newValue})}/>
        <div style={{ height: 13 }}></div>
        <div>
          <Button onClick={() => createProblem()} title='SAVE' />
        </div>
      </div>
    </div>
  )
}

export default ProblemCreatePanel