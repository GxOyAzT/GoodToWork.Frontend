import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { CommentBaseModelDto } from '../../../../../models/dtos/comment/CommentBaseModelDto'

import './CommentListPanel.css'

type CommentListPanelInput = {
  comments: CommentBaseModelDto[] 
}

const CommentListPanel = (props: CommentListPanelInput) => {
  const commentPanelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    commentPanelRef.current?.scrollIntoView({ behavior: "smooth" })
  })

  return (
    <div className='CommentListPanel-wrapper'>
    {
      props.comments.map(comment => <Comment key={comment.id} comment={comment}/>)
    }
    <div ref={commentPanelRef}/>
    </div>
  )
}

type CommentInput = {
  comment: CommentBaseModelDto 
}

const Comment = (props: CommentInput) => {
  return (
    <div className='Comment-wrapper' key={props.comment.id}>
      <div className='Comment-header'>
        <div>{props.comment.creatorName}</div>
        <div className='Comment-header-time'>{props.comment.created}</div>
      </div>
      <p className='Comment-content'>{props.comment.comment}</p>
    </div>
  )
}

export default CommentListPanel