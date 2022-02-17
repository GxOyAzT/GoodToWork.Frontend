import React from 'react';
import './App.css';
import HomePanel from './components/panels/home/HomePanel'
import ProjectCreatePanel from './components/panels/project/create/ProjectCreatePanel'
import ProjectEditPanel from './components/panels/project/edit/ProjectEditPanel'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import ProjectsList from './components/panels/project/list/ProjectsListPanel';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/home" element={<HomePanel/>}/>

            <Route path="/projects" element={<ProjectsList/>}/>
            <Route path="/projects/create" element={<ProjectCreatePanel/>}/>
            <Route path="/projects/edit/:id" element={<ProjectEditPanel/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
