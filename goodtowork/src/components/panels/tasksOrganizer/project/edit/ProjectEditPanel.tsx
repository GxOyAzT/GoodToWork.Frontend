import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { GetData } from '../../../../../data/get/GetData'
import { FetchData } from '../../../../../data/fetch/FetchData'
import { ProjectEditDto } from '../../../../../models/dtos/project/ProjectEditDto'
import { UserDto } from '../../../../../models/dtos/user/UserDto'
import { UserContext } from '../../../../../contexts/user/UserContext'
import './ProjectEditPanel.css'
import { UserProjectRoleEnum } from '../../../../../models/enums/UserProjectRoleEnum'

import TextInput from '../../../../atoms/text/TextInput'
import TestAreaInput from '../../../../atoms/textArea/TestAreaInput'
import Button from '../../../../atoms/button/Button'
import { ProjectUserBaseDto } from '../../../../../models/dtos/projectUser/ProjectUserBaseDto'
import List from '../../../../atoms/list/List'

function ProjectEditPanel() {
  console.log('ProjectEditPanel')
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [created, setCreated] = useState<string>('')
  const [assignedCoworkers, setAssignedCoworkers] = useState<ProjectUserBaseDto[]>([])
  const [avaliableCoworkers, setAvaliableCoworkers] = useState<UserDto[]>([])

  let { projectId } = useParams();

  useEffect(() => {
    loadData()
  }, [])

  const user = useContext(UserContext)

  const loadData = async () => {
    const response = await FetchData<ProjectEditDto>(`project/getforedit/${user?.userId}/${projectId}`, 'GET')

    if (response.StatusCode === 200) {
      setName(response.Content?.name ?? '')
      setDescription(response.Content?.description ?? '')
      setCreated(response.Content?.created ?? '')
      setAssignedCoworkers(response.Content?.addedUsers ?? [])
      setAvaliableCoworkers(response.Content?.avaliableUsers ?? [])
    }
  }

  const addCoworkerToProject = async (performerId: string) => {
    const body = {
      projectId: projectId,
      newPerformerId: performerId,
      senderId: user?.userId
    }

    const response = await FetchData<ProjectEditDto>(`project/addcoworkertoproject`, 'PATCH', body)

    console.log(response)

    if (response.StatusCode === 200) {
      setAssignedCoworkers(response.Content?.addedUsers ?? [])
      setAvaliableCoworkers(response.Content?.avaliableUsers ?? [])
    }
  }

  const updateRole = (userId : string, role: UserProjectRoleEnum) => {
    var projectUser = assignedCoworkers.findIndex(pu => pu.userId == userId)

    assignedCoworkers[projectUser].role = role

    setAssignedCoworkers([...assignedCoworkers])
  }
 
  return (
    <div className='ProjectEditPanel-wrapper'>
      <div>
        <div>
          <TextInput title='ID' actualValue={projectId ?? ''} onChange={() => {}} />
        </div>
        <div>
          <TextInput title='PROJECT NAME' actualValue={name} onChange={setName} />
        </div>
        <div className='ProjectCreatePanel-boxspace'></div>
        <div>
          <TestAreaInput title='DESCRIPTION' actualValue={description ?? ''} onChange={setDescription} />
        </div>
        <div>
          <TextInput title='CREATION DATE' actualValue={created} onChange={() => {}} />
        </div>
      </div>
      <div>
        <div>
          <h4>Coworkers in project</h4>
          <List rows={assignedCoworkers.map(projectUser => <ProjectUserRole key={projectUser.userId} updateRole={updateRole} projectUser={projectUser} senderId={user?.userId ?? ''} />)} />
        </div>
        <div>
          <h4>Avaliable Coworkers</h4>
          {
            avaliableCoworkers.map(user => <div key={user.id}>
              { user.name }
              <div onClick={() => addCoworkerToProject(user.id)}>ADD</div>
            </div>)
          }
        </div>
      </div>
    </div>
  )
}

type ProjectUserRoleInput = {
  projectUser: ProjectUserBaseDto,
  senderId: string
  updateRole: (userId : string, role: UserProjectRoleEnum) => void
}

const ProjectUserRole = (props : ProjectUserRoleInput) => {

  const changeUserRole = async (role: UserProjectRoleEnum) => {
    const response = await FetchData('project/updatecoworkerrole', 'PATCH', {
      senderId: props.senderId,
      userId: props.projectUser.userId,
      projectId: props.projectUser.projectId,
      role: role
    })

    if (response.StatusCode === 200) {
      props.updateRole(props.projectUser.userId, role)
    }
  }

  const addPermission = async (role: UserProjectRoleEnum) => {
    switch (role) {
      case UserProjectRoleEnum.performer:
        await changeUserRole(props.projectUser.role | UserProjectRoleEnum.performer)
        break
      case UserProjectRoleEnum.creator:
        await changeUserRole(props.projectUser.role | UserProjectRoleEnum.creator)
        break
      case UserProjectRoleEnum.moderator:
        await changeUserRole(props.projectUser.role | UserProjectRoleEnum.moderator)
        break
    }
  }

  const removePermission = async (role: UserProjectRoleEnum) => {
    switch (role) {
      case UserProjectRoleEnum.performer:
        await changeUserRole(props.projectUser.role & ~UserProjectRoleEnum.performer)
        break
      case UserProjectRoleEnum.creator:
        await changeUserRole(props.projectUser.role & ~UserProjectRoleEnum.creator)
        break
      case UserProjectRoleEnum.moderator:
        await changeUserRole(props.projectUser.role & ~UserProjectRoleEnum.moderator)
        break
    }
  }

  return (
    <div key={props.projectUser.projectId}>
      { props.projectUser.name }
      { (props.projectUser.role & UserProjectRoleEnum.performer) === UserProjectRoleEnum.performer ? <div style={{ background: 'green' }} onClick={() => removePermission(UserProjectRoleEnum.performer)}>Performer</div> : <div onClick={() => addPermission(UserProjectRoleEnum.performer)}>ADD Performer</div>  }
      { (props.projectUser.role & UserProjectRoleEnum.creator) === UserProjectRoleEnum.creator ? <div style={{ background: 'green' }} onClick={() => removePermission(UserProjectRoleEnum.creator)}>Creator</div> : <div onClick={() => addPermission(UserProjectRoleEnum.creator)}>ADD Creator</div>  }
      { (props.projectUser.role & UserProjectRoleEnum.moderator) === UserProjectRoleEnum.moderator ? <div style={{ background: 'green' }} onClick={() => removePermission(UserProjectRoleEnum.moderator)}>Moderator</div> : <div onClick={() => addPermission(UserProjectRoleEnum.moderator)}>ADD Moderator</div>  }
    </div>
  )
}

export default ProjectEditPanel