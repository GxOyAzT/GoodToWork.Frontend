import { ProjectDetailDto } from '../../../../../../models/dtos/project/ProjectDetailDto'

type ProjectDetailHeaderProps = {
  project: ProjectDetailDto,
  createProblemClicked: () => void
}

const ProjectDetailHeader = (props: ProjectDetailHeaderProps) => {
  return (
    <div className='ProjectDetailHeader-wrapper'>
      <div></div>
      <div className='ProjectDetailHeader-content'>
        {props.project.name}
      </div>
      {
        props.project.hasCreateRole ? 
        <div className='ProjectDetailHeader-addButton noselect' onClick={() => props.createProblemClicked()}>+</div>
        :
        <div></div>
      }
      <div></div>
    </div>
  )
}

export default ProjectDetailHeader