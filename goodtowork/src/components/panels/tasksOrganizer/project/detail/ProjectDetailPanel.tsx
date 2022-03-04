import { useEffect, useContext, useState } from 'react'
import './ProjectDetailPanel.css'
import { useParams } from 'react-router-dom'
import { UserContext } from '../../../../../contexts/user/UserContext'
import { FetchData } from '../../../../../data/fetch/FetchData'
import { ProjectDetailDto } from '../../../../../models/dtos/project/ProjectDetailDto'
import ProblemCreatePanel from '../../problem/create/ProblemCreatePanel'
import { ProblemStatusEnum } from '../../../../../models/enums/ProblemStatusEnum'
import Loading from '../../../../atoms/loading/Loading'
import ProjectDetailHeader from './inner/ProjectDetailHeader'
import ProblemsCategory from './inner/ProblemsCategory'

const ProjectDetailPanel = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isCreatePanelVisible, setIsCreatePanelVisible] = useState<boolean>(false)
  const [project, setProject] = useState<ProjectDetailDto | null>(null)

  let { projectId } = useParams();

  const user = useContext(UserContext)

  useEffect(() => {
    if (isCreatePanelVisible == true) return;
    loadData()
  }, [isCreatePanelVisible])

  const loadData = async () => {
    setIsLoading(true)
    const response = await FetchData<ProjectDetailDto>(`project/detail/${user?.userId}/${projectId}`, 'GET')

    if (response.StatusCode === 200){
      setProject(response.Content ?? null)
      console.log(response.Content)
    }
    setIsLoading(false)
  }

  if (isLoading) {
    return <Loading/>
  }

  if (project == null) {
    return <></>
  }

  if (isCreatePanelVisible) {
    return <ProblemCreatePanel performers={project.performers} projectId={project.id} backEvent={() => setIsCreatePanelVisible(false)}/>
  }

  return (
    <div className='ProjectDetailPanel-wrapper'>
      <div>
        <ProjectDetailHeader createProblemClicked={() => setIsCreatePanelVisible(true)} project={project}/>
      </div>
      <div>
        <ProblemsCategory problems={project?.problems.filter(p => p.problemStatus === ProblemStatusEnum.InProgress) ?? []} title='OPEN'/>
        <ProblemsCategory problems={project?.problems.filter(p => p.problemStatus === ProblemStatusEnum.Created || p.problemStatus === ProblemStatusEnum.ToFix) ?? []} title='WAITING'/>
        <ProblemsCategory problems={project?.problems.filter(p => p.problemStatus === ProblemStatusEnum.Finished) ?? []} title='FINISHED'/>
        <ProblemsCategory problems={project?.problems.filter(p => p.problemStatus === ProblemStatusEnum.Closed) ?? []} title='DONE'/>
      </div>
    </div>
  )
}

export default ProjectDetailPanel