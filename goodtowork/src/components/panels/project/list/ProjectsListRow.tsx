import React from 'react'
import './ProjectsList.css'
import { ProjectBaseDto } from '../../../../models/dtos/project/ProjectBaseDto'

export type ProjectsListRowInput = {
  ProjectBaseDto : ProjectBaseDto
}

function ProjectsListRow(props : ProjectsListRowInput ) {
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
          
        </div>
      </div>
    </div>
  )
}

export default ProjectsListRow