import HomePanel from '../../../../components/panels/home/HomePanel'
import ProjectCreatePanel from '../../../../components/panels/tasksOrganizer/project/create/ProjectCreatePanel'
import ProjectEditPanel from '../../../../components/panels/tasksOrganizer/project/edit/ProjectEditPanel'
import ProjectDetailPanel from '../../../../components/panels/tasksOrganizer/project/detail/ProjectDetailPanel'
import ProjectsList from '../../../../components/panels/tasksOrganizer/project/list/ProjectsListPanel';
import ProblemDetailPanel from '../../../../components/panels/tasksOrganizer/problem/detail/ProblemDetailPanel';
import SettingsPanel from '../../settings/SettingsPanel'

import './Screen.css'

import { Route, Routes } from "react-router-dom";
import ProblemCreatePanel from '../../tasksOrganizer/problem/create/ProblemCreatePanel';

const Screen = () => {
  return (
    <div className='Screen-main'>
      <Routes>
        <Route path="/" element={<HomePanel/>}/>
        <Route path="/home" element={<HomePanel/>}/>
        <Route path="/settings" element={<SettingsPanel/>}/>
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