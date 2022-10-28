import React from 'react';
import s from './breadcrumbs.module.sass'
import {NavLink} from "react-router-dom";

const Breadcrumbs = () => {
  return (
    <div className={s.breadcrumbs}>
      <NavLink to={'/'} className={s.link}>Все проекты</NavLink>
      <NavLink to={'#'} className={s.link}>Игры</NavLink>
      <span className={s.link}>Exit Veil…</span>
    </div>
  );
};

export default Breadcrumbs;