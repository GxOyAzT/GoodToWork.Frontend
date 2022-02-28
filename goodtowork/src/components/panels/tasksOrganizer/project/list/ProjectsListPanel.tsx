import { useEffect, useState, useContext } from 'react'
import ProjectsListRow from './ProjectsListRow'
import './ProjectsList.css'
import { ProjectBaseDto } from '../../../../../models/dtos/project/ProjectBaseDto'
import { GetData } from '../../../../../data/get/GetData'
import { UserContext } from '../../../../../contexts/user/UserContext'
import List from '../../../../atoms/list/List'

function ProjectsList() {
  const [projects, setProjects] = useState<ProjectBaseDto[] | undefined>([])
  
  useEffect(() => {
    loadData()
  }, [])

  const userContext = useContext(UserContext)

  async function loadData() {
    var response = await GetData<ProjectBaseDto[]>(`project/getalluser/${userContext?.userId}`)
    
    console.log(response.StatusCode)

    if (response.StatusCode === 200) {
      setProjects(response.Content)
    }
  }

  return (
    <div className='ProjectsList-wrapper'>
      ProjectsList
      {
        projects? 
        <List rows={projects.map(project => <ProjectsListRow ProjectBaseDto={project} /> )} />
        :
        <></>
        //projects?  projects.map(project => <ProjectsListRow key={project.id} ProjectBaseDto={project}/>) : <p>You are not assigned to any project.</p>
      }
    </div>
  )
}

export default ProjectsList