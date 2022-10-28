import React from 'react';
import s from './ProjectSidebar.module.sass'
import {Route, Routes} from "react-router-dom";
import SidebarInfo from "./SidebarInfo";
import SidebarAward from "./SidebarAward";

const ProjectSidebar = () => {
  return (
    <div className={s.sidebar}>
      <Routes>
        <Route path={'info'} element={<SidebarInfo/>} />
        <Route path={'award'} element={<SidebarAward/>} />
      </Routes>
    </div>
  );
};

export default ProjectSidebar;