import { useState, useContext } from 'react'

import { FetchData } from '../../../../../data/fetch/FetchData'
import { UserContext } from '../../../../../contexts/user/UserContext'

import { CommentBaseModelDto } from '../../../../../models/dtos/comment/CommentBaseModelDto'

import TextAreaInput from '../../../../atoms/textArea/TestAreaInput'
import Button from '../../../../atoms/button/Button'

import './CommentCreatePanel.css'

type CommentCreatePanelInput = {
  ProblemId: string
  OnSuccess?: (comment: CommentBaseModelDto) => void
}

const CommentCreatePanel = (props: CommentCreatePanelInput) => {
  const [comment, setComment] = useState('')

  const user = useContext(UserContext)
  const createCommand = async () => {
    var response = await FetchData<CommentBaseModelDto>('comment/create', 'POST', {
      comment: comment,
      problemId: props.ProblemId,
      senderId: user?.userId
    })

    if (response.StatusCode === 200) {
      setComment('')
      if (props.OnSuccess) if(response.Content) props.OnSuccess(response.Content)
    }
  }

  return (
    <div>
      <div>
        <TextAreaInput title='COMMENT' actualValue={comment} onChange={newVal => setComment(newVal)}/>
      </div>
      <br/>
      <div>
        <Button onClick={() => createCommand()} title='SEND'/>
      </div>
    </div>
  )
}

export default CommentCreatePanel