import React, { useContext } from 'react'
import './ProjectsList.css'
import { ProjectBaseDto } from '../../../../../models/dtos/project/ProjectBaseDto'
import { UserContext } from '../../../../../contexts/user/UserContext'
import Button from '../../../../atoms/button/Button'
import { useNavigate } from 'react-router-dom'

export type ProjectsListRowInput = {
  ProjectBaseDto : ProjectBaseDto
}

const ProjectsListRow = (props : ProjectsListRowInput ) => {

  const user = useContext(UserContext)

  let navigate = useNavigate();

  if (user == null){
    return <></>;
  }
  
  const goToEdit = (id: string) => {
    navigate(`/projects/edit/${id}`)
  }

  const goToDetails = (id: string) => {
    navigate(`/projects/details/${id}`)
  }

  return (
    <div className='ProjectsListRow-wrapper'>
      <div className='ProjectsListRow-columnsdefinitions'>
        <div className='ProjectsListRow-column'>
          {props.ProjectBaseDto.name}
        </div>
        <div className='ProjectsListRow-separator'></div>
        <div className='ProjectsListRow-column'>
          {props.ProjectBaseDto.coworkersCount}
        </div>
        <div className='ProjectsListRow-separator'></div>
        <div className='ProjectsListRow-column'>
          {
            props.ProjectBaseDto.moderatorIds?.includes(user?.userId) ? 
              <Button OnClick={() => goToEdit(props.ProjectBaseDto.id)} Title='MODIFY' Background='blue' fontSize={15}></Button>
            :
              <></>
          }
          <Button OnClick={() => goToDetails(props.ProjectBaseDto.id)} Title='DETAILS' Background='yellow' fontSize={15}></Button>
        </div>
      </div>
    </div>
  )
}

export default ProjectsListRow