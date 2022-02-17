import React from 'react'
import { useParams } from 'react-router-dom'

function ProjectEditPanel() {
  let { id } = useParams();

  return (
    <div>ProjectEditPanel</div>
  )
}

export default ProjectEditPanel