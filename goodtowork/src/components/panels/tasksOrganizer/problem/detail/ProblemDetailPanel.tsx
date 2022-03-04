import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProblemDetailModelDto } from '../../../../../models/dtos/problem/ProblemDetailModelDto'
import { CommentBaseModelDto } from '../../../../../models/dtos/comment/CommentBaseModelDto'
import { ProblemStatusEnum } from '../../../../../models/enums/ProblemStatusEnum'
import { FetchData } from '../../../../../data/fetch/FetchData'
import { UserContext } from '../../../../../contexts/user/UserContext'
import CommentCreatePanel from '../../comment/create/CommentCreatePanel'
import CommentListPanel from '../../comment/list/CommentListPanel'
import './ProblemDetailPanel.css'

const ProblemDetailPanel = () => {
  const [problem, setProblem] = useState<ProblemDetailModelDto>({ id: '', projectId: '', title: '', description: '', created: '', creatorName: '', performerName: '', problemStatus: 0, comments: [], statuses: []  })

  const { problemId } = useParams()
  const user = useContext(UserContext)

  useEffect(() => { loadData() }, [])

  const loadData = async () => {
    var response = await FetchData<ProblemDetailModelDto>(`problem/detail/${problemId}/${user?.userId}`, 'GET')

    if (response.StatusCode === 200) {
      setProblem(response.Content ?? { id: '', projectId: '', title: '', description: '', created: '', creatorName: '', performerName: '', problemStatus: 0, comments: [], statuses: []  })
    }
  }

  const addComment = (comment : CommentBaseModelDto) => {
    setProblem(oldState => { 
      return { ...oldState, comments: [ ...oldState.comments, comment ] } 
    })
  }

  const updateStatus = async (newStatus : ProblemStatusEnum) => {
    var response = await FetchData(`problem/updatestatus`, 'POST', {
      problemId: problemId,
      problemStatus: newStatus,
      senderId: user?.userId
    })

    if (response.StatusCode === 200) {
      console.log('OK')
    }
  }

  return (
    <div className='ProblemDetailPanel-wrapper'>
      <div>
      {
          problem != null ?
          <div>
            <div>
              TITLE: {problem.title}
            </div>
            <div>
              CREATOR: {problem.creatorName}
            </div>
            <div>
              PERFORMER: {problem.performerName}
            </div>
            <div>
              STATUS: {problem.problemStatus}
            </div>
            <div>
              DESCRIPTION: {problem.description}
            </div>

            <br/>
            <br/>

            <div>
              {
                problem.problemStatus === ProblemStatusEnum.Created ? 
                <button onClick={() => updateStatus(ProblemStatusEnum.InProgress)}>CHANGE TO IN PROGRESS</button>
                : problem.problemStatus === ProblemStatusEnum.InProgress ?
                <button onClick={() => updateStatus(ProblemStatusEnum.Finished)}>CHANGE TO FINISHED</button>
                : problem.problemStatus === ProblemStatusEnum.Finished ?
                <div>
                  <button onClick={() => updateStatus(ProblemStatusEnum.Closed)}>CHANGE TO CLOSED</button>
                  <button onClick={() => updateStatus(ProblemStatusEnum.ToFix)}>CHANGE TO FIX</button>
                </div>
                : problem.problemStatus === ProblemStatusEnum.ToFix ?
                <button onClick={() => updateStatus(ProblemStatusEnum.Finished)}>CHANGE TO FINISHED</button>
                : <></>
              }
            </div>

            <br/>
            <br/>

            
          </div>
          :
          <></>
        }
      </div>
      <div className='ProblemDetailPanel-comments-wrapper'>
        <CommentListPanel comments={problem.comments}/>
        <div></div>
        <CommentCreatePanel OnSuccess={addComment} ProblemId={problemId ?? ''}/>
      </div>
    </div>
  )
}

export default ProblemDetailPanel