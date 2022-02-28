import { useState, useContext } from 'react'
import { UserDto } from '../../../../../models/dtos/user/UserDto'
import { UserContext } from '../../../../../contexts/user/UserContext'
import { FetchData } from '../../../../../data/fetch/FetchData'

export type ProblemCreatePanelInput = {
  performers: UserDto[],
  projectId: string
}

const ProblemCreatePanel = (props : ProblemCreatePanelInput) => {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [performer, setPerformer] = useState<string>('00000000-0000-0000-0000-000000000000')

  const user = useContext(UserContext)

  const createProblem = async () => {
    console.log({
      title: title,
      description: description,
      projectId: props.projectId,
      performerId: performer,
      senderId: user?.userId
    })
    const response = await FetchData(`problem/create`, 'POST', {
      title: title,
      description: description,
      projectId: props.projectId,
      performerId: performer,
      senderId: user?.userId
    })
  }

  return (
    <div style={{ border: '1px solid black' }}>
      <div>
        ProblemCreatePanel
      </div>
      <div>
        <label>Title</label>
        <input onChange={e => setTitle(e.target.value)}/>
      </div>
      <div>
        <label>Description</label>
        <textarea onChange={e => setDescription(e.target.value)}/>
      </div>
      <div>
        <select placeholder='PERFORMERS' onChange={e => setPerformer(e.target.value)}>
          {
            props.performers.map(performer => <option value={performer.id} key={performer.id}>{performer.name}</option>)
          }
        </select>
      </div>
      <button onClick={() => createProblem()}>CREATE</button>
    </div>
  )
}

export default ProblemCreatePanel