import React, { useEffect, useContext, useState } from 'react'
import './ProjectDetailPanel.css'
import { useParams } from 'react-router-dom'
import { UserContext } from '../../../../../contexts/user/UserContext'
import { FetchData } from '../../../../../data/fetch/FetchData'
import { ProjectDetailDto } from '../../../../../models/dtos/project/ProjectDetailDto'
import { ProblemStatusEnum } from '../../../../../models/enums/ProblemStatusEnum'
import ProblemCreatePanel from '../../problem/create/ProblemCreatePanel'
import { useNavigate } from 'react-router-dom'

const ProjectDetailPanel = () => {
  const [project, setProject] = useState<ProjectDetailDto | null>(null)

  let { projectId } = useParams();

  const user = useContext(UserContext)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    const response = await FetchData<ProjectDetailDto>(`project/detail/${user?.userId}/${projectId}`, 'GET')

    if (response.StatusCode === 200){
      setProject(response.Content ?? null)
      console.log(response.Content)
    }
  }

  var navigator = useNavigate()
  const goToProblem = (problemId: string) => {
    navigator(`/problems/details/${problemId}`)
  }

  return (
    <div>
      ProjectDetailPanel ID: { projectId } PROJECT NAME: {project?.name}
      <div>
        {
          project?.problems.map(problem => 
            <div style={{ border: 'black 1px solid' }} key={problem.id} onClick={() => goToProblem(problem.id)}>
              <div>
                TITLE: { problem.title } STATUS: { problem.problemStatus } PERFORMER: { problem.performerName }
              </div>
              {/* <div>
                {
                  problem.problemStatus === ProblemStatusEnum.Created ? 
                    <ChangeStatusButton status={ProblemStatusEnum.InProgress} problemId={problem.id}/> :
                  problem.problemStatus === ProblemStatusEnum.InProgress ?
                    <ChangeStatusButton status={ProblemStatusEnum.Finished} problemId={problem.id}/> :
                  problem.problemStatus === ProblemStatusEnum.Finished ?
                    <div>
                      <ChangeStatusButton status={ProblemStatusEnum.ToFix} problemId={problem.id}/>
                      <ChangeStatusButton status={ProblemStatusEnum.ToFix} problemId={problem.id}/>
                    </div> :
                    <></>
                }
              </div> */}
            </div>
          )
        }
      </div>
      <div>
        {
          project?.hasCreateRole ? 
          <ProblemCreatePanel performers={project ? project.performers : []} projectId={projectId ?? ''} />
          :
          <></>
        }
      </div>
    </div>
  )
}

type ChangeStatusButtonInput = {
  status: ProblemStatusEnum,
  problemId: string
}

const ChangeStatusButton = (props: ChangeStatusButtonInput) => {

  const user = useContext(UserContext)
  console.log({
    status: props.status,
    problemId: props.problemId,
    senderId: user?.userId
  })
  
  const changeStatus = async () => {
    const response = await FetchData<ProjectDetailDto>(`problem/updatestatus`, 'POST', {
      status: props.status,
      problemId: props.problemId,
      senderId: user?.userId
    })
  }

  return (
    <div onClick={() => changeStatus()} style={{ border: '1px solid black' }}>
      {
        props.status === ProblemStatusEnum.InProgress ?
        <div>In Progress</div> :
        props.status === ProblemStatusEnum.Finished ?
        <div>Finished</div> :
        props.status === ProblemStatusEnum.ToFix ?
        <div>To Fix</div> :
        props.status === ProblemStatusEnum.Closed ?
        <div>Closed</div> : <></>
      }
    </div>
  )
}

export default ProjectDetailPanel