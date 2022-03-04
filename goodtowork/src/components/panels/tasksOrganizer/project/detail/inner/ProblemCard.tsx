import { ProblemBaseDto } from '../../../../../../models/dtos/problem/ProblemBaseDto'
import { useNavigate } from 'react-router-dom'

type ProblemCardProps = {
  problem: ProblemBaseDto
}

const ProblemCard = (props: ProblemCardProps) => {

  var navigator = useNavigate()
  const goToProblem = (problemId: string) => {
    navigator(`/problems/details/${problemId}`)
  }

  return (
    <div className='ProblemCard-wrapper' onClick={() => goToProblem(props.problem.id)}>
      <div className='ProblemCard-wrapper-inner'>
        <div className='ProblemCard-header noselect'>
          { props.problem.title }
        </div>
        <div>
          STATUS: { props.problem.problemStatus } PERFORMER: { props.problem.performerName }
        </div>
      </div>
    </div>
  )
}

export default ProblemCard