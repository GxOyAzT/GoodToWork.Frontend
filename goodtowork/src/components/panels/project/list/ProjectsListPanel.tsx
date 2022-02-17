import { useEffect, useState } from 'react'
import ProjectsListRow from './ProjectsListRow'
import './ProjectsList.css'
import { ProjectBaseDto } from '../../../../models/dtos/project/ProjectBaseDto'
import { GetData } from '../../../../data/get/GetData'

function ProjectsList() {
  const [projects, setProjects] = useState<ProjectBaseDto[] | undefined>([])
  
  useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    var response = await GetData<ProjectBaseDto[]>('project/getalluser/00000000-0000-0000-0000-000000000002')
    
    if (response.StatusCode === 200 || response.StatusCode === 400) {
      setProjects(response.Content)
    }
  }

  return (
    <div className='ProjectsList-wrapper'>
      ProjectsList
      {
        projects? projects.map(project => <ProjectsListRow ProjectBaseDto={project}/>) : <p>You are not assigned to any project.</p>
      }
    </div>
  )
}

export default ProjectsList