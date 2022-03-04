import { useEffect, useState, useContext } from 'react'
import './ProjectsList.css'
import { ProjectBaseDto } from '../../../../../models/dtos/project/ProjectBaseDto'
import { GetData } from '../../../../../data/get/GetData'
import { UserContext } from '../../../../../contexts/user/UserContext'
import Button from '../../../../atoms/button/Button'
import Switch from '../../../../atoms/switch/Switch'
import List from '../../../../atoms/list/List'
import { useNavigate } from 'react-router-dom'
import Loading from '../../../../atoms/loading/Loading'

function ProjectsList() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [displayAll, setDisplayAll] = useState<boolean>(false)
  const [projects, setProjects] = useState<ProjectBaseDto[] | undefined>([])
  
  useEffect(() => {
    loadData()
  }, [displayAll])

  const userContext = useContext(UserContext)

  async function loadData() {
    setIsLoading(pv => !pv)
    
    const senderId = !displayAll ? '00000000-0000-0000-0000-000000000000' : userContext?.userId

    var response = await GetData<ProjectBaseDto[]>(`project/getalluser/${senderId}`)

    if (response.StatusCode === 200) {
      setProjects(response.Content)
    }

    setIsLoading(pv => !pv)
  }

  if (isLoading) return <Loading/>

  return (
    <div className='ProjectsList-wrapper'>
      <div className='ProjectsList-top'>
        <div></div>
        <div>ALL</div>
        <div></div>
        <Switch OnChange={() => setDisplayAll(pv => !pv)} value={displayAll} />
      </div>
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

type ProjectsListRowInput = {
  ProjectBaseDto : ProjectBaseDto,
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
    <div className='ProjectsListRow-wrapper' onClick={() => goToDetails(props.ProjectBaseDto.id)}>
      <div className='ProjectsListRow-columnsdefinitions'>
        <div className='ProjectsListRow-column'>
          {props.ProjectBaseDto.name}
        </div>
        <div className='ProjectsListRow-column'>
          {props.ProjectBaseDto.coworkersCount}
        </div>
        <div className='ProjectsListRow-column'>
        </div>
      </div>
    </div>
  )
}

export default ProjectsList