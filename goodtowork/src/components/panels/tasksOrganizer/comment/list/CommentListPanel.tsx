import { CommentBaseModelDto } from '../../../../../models/dtos/comment/CommentBaseModelDto'

import './CommentListPanel.css'

type CommentListPanelInput = {
  comments: CommentBaseModelDto[] 
}

const CommentListPanel = (props: CommentListPanelInput) => {
  return (
    <div className='CommentListPanel-wrapper'>
    {
      props.comments.map(comment => <Comment comment={comment}/>)
    }
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