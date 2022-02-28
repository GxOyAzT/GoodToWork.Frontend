import { useState, useContext } from 'react'
import { FetchData } from '../../../../../data/fetch/FetchData'
import { UserContext } from '../../../../../contexts/user/UserContext'
import { CommentBaseModelDto } from '../../../../../models/dtos/comment/CommentBaseModelDto'

type CommentListPanelInput = {
  Comments: CommentBaseModelDto[] 
}

const CommentListPanel = (props: CommentListPanelInput) => {
  return (
    <div>
    {
      props.Comments.map(comment => <div key={comment.id}>
        CREATEDBY: {comment.creatorName} TIME: {comment.created} COMMENT: {comment.comment} 
        <br/>
      </div>)
    }
    </div>
  )
}

export default CommentListPanel