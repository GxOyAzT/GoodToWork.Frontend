import { useEffect, useState } from 'react'
import { ProblemBaseDto } from '../../../../../../models/dtos/problem/ProblemBaseDto'
import ProblemCard from './ProblemCard'

type ProblemsCategoryProps = {
  problems: ProblemBaseDto[],
  initialVisibility?: boolean
  title: string
}

const ProblemsCategory = (props: ProblemsCategoryProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(true)

  useEffect(() => {
    if (props.initialVisibility) setIsVisible(props.initialVisibility)
  }, [])

  if (props.problems.length == 0) {
    return <></>
  }

  return (
    <div className='ProblemsCategory-tasks-wrapper'>
      <div className='ProblemsCategory-tasks-nav noselect' onClick={() => setIsVisible(ps => !ps)}>
        <div className='ProblemsCategory-nav-siders'>
        </div>
        <div>{ props.title }</div>
        <div className='ProblemsCategory-nav-siders'>
        </div>
      </div>
      {
        isVisible ?
        <div>
          { props.problems.map(problem => <ProblemCard problem={problem}/>) }
        </div>
        :
        <div></div>
      }
      <div></div>
    </div>
  )
}

export default ProblemsCategory