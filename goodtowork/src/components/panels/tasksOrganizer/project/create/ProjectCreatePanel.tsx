import React, { useState, useContext } from 'react'
import TextInput from '../../../../atoms/text/TextInput'
import TestAreaInput from '../../../../atoms/textArea/TestAreaInput'
import Button from '../../../../atoms/button/Button'
import './ProjectCreatePanel.css'
import { PostData } from '../../../../../data/post/PostData'
import { useNavigate } from 'react-router-dom'
import { ProjectBaseDto } from '../../../../../models/dtos/project/ProjectBaseDto'
import { UserContext } from '../../../../../contexts/user/UserContext'

function ProjectCreatePanel() {
  const [projectName, setProjectName] = useState<string>('')
  const [projectDescription, setProjectDescription] = useState<string>('')

  function setprojectNameWrapper(newValue : string) { setProjectName(newValue) }
  function setprojectDescriptionWrapper(newValue : string) { setProjectDescription(newValue) }

  const userContext = useContext(UserContext)

  let navigate = useNavigate();
  async function PostForm() {
    const newProjectModel = {
      Name: projectName,
      Description: projectDescription,
      SenderId: userContext?.userId
    }

    var result = await PostData<ProjectBaseDto>('project/create', newProjectModel)

    console.log(result)

    if (result.StatusCode === 200){
      navigate(`/projects/edit/${result.Content?.id}`)
    }
  }

  return (
    <div className='ProjectCreatePanel-wrapper'>
      <div>
        <TextInput title='PROJECT NAME' actualValue={projectName} onChange={setprojectNameWrapper} />
      </div>
      <div className='ProjectCreatePanel-boxspace'></div>
      <div>
        <TestAreaInput title='DESCRIPTION' actualValue={projectDescription} onChange={setprojectDescriptionWrapper} />
      </div>
      <div className='ProjectCreatePanel-boxspace'></div>
      <div>
        <Button title='SAVE' background='green' onClick={() => PostForm()}/>
      </div>
    </div>
  )
}

export default ProjectCreatePanel