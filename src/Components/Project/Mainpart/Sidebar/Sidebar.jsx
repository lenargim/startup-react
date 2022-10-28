import React from 'react';
import s from './Sidebar.module.sass'
import {NavLink} from "react-router-dom";
import Info from "./Info/Info";
import useCheckScreen from "../../../../handlers/handler";
import SvgProjectInfo from "../../../Svg/ProjectInfo";
import SvgReward from "../../../Svg/Reward";


const Sidebar = () => {
  return (
    <div>
      <aside className={s.sidebar}>
        <nav className={[s.sidebarNav, 'could-fixed'].join(' ')}>
          <NavLink end to={'/project'} className={({isActive})=> isActive
            ? [s.active, s.sidebarLink].join(' ')
            : s.sidebarLink}>
            <SvgProjectInfo/>
            <span>Информация о проекте</span>
          </NavLink>
          <NavLink end to={'/project/award'} className={({isActive})=> isActive
            ? [s.active, s.sidebarLink].join(' ') :
            s.sidebarLink}>
            <SvgReward/>
            <span>Вознаграждения</span>
          </NavLink>
        </nav>
        {useCheckScreen(1023) || <Info/>}
      </aside>
    </div>
  );
};

export default Sidebar;