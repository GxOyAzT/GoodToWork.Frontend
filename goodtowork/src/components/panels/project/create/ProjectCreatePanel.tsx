import React, { useState } from 'react'
import TextInput from '../../../atoms/text/TextInput'
import TestAreaInput from '../../../atoms/textArea/TestAreaInput'
import Button from '../../../atoms/button/Button'
import './ProjectCreatePanel.css'
import { PostData } from '../../../../data/post/PostData'
import { useNavigate } from 'react-router-dom'
import { ProjectBaseDto } from '../../../../models/dtos/project/ProjectBaseDto'

function ProjectCreatePanel() {
  const [projectName, setProjectName] = useState<string>('')
  const [projectDescription, setProjectDescription] = useState<string>('')

  function setprojectNameWrapper(newValue : string) { setProjectName(newValue) }
  function setprojectDescriptionWrapper(newValue : string) { setProjectDescription(newValue) }

  let navigate = useNavigate();
  async function PostForm() {
    const newProjectModel = {
      Name: projectName,
      Description: projectDescription,
      SenderId: '00000000-0000-0000-0000-000000000001'
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
        <TextInput Title='PROJECT NAME' ActualValue={projectName} OnChange={setprojectNameWrapper} />
      </div>
      <div className='ProjectCreatePanel-boxspace'></div>
      <div>
        <TestAreaInput Title='DESCRIPTION' ActualValue={projectDescription} OnChange={setprojectDescriptionWrapper} />
      </div>
      <div className='ProjectCreatePanel-boxspace'></div>
      <div>
        <Button Title='SAVE' Background='green' OnClick={() => PostForm()}/>
      </div>
    </div>
  )
}

export default ProjectCreatePanel