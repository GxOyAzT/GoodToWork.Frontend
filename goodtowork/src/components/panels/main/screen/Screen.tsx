import HomePanel from '../../../../components/panels/home/HomePanel'
import ProjectCreatePanel from '../../../../components/panels/tasksOrganizer/project/create/ProjectCreatePanel'
import ProjectEditPanel from '../../../../components/panels/tasksOrganizer/project/edit/ProjectEditPanel'
import ProjectDetailPanel from '../../../../components/panels/tasksOrganizer/project/detail/ProjectDetailPanel'
import ProjectsList from '../../../../components/panels/tasksOrganizer/project/list/ProjectsListPanel';
import ProblemDetailPanel from '../../../../components/panels/tasksOrganizer/problem/detail/ProblemDetailPanel';

import { Route, Routes } from "react-router-dom";

const Screen = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePanel/>}/>
        <Route path="/home" element={<HomePanel/>}/>
        <Route path="/projects" element={<ProjectsList/>}/>
        <Route path="/projects/create" element={<ProjectCreatePanel/>}/>
        <Route path="/projects/edit/:projectId" element={<ProjectEditPanel/>}/>
        <Route path="/projects/details/:projectId" element={<ProjectDetailPanel/>}/>
        <Route path="/problems/details/:problemId" element={<ProblemDetailPanel/>}/>
      </Routes>
    </div>
  )
}

export default Screen