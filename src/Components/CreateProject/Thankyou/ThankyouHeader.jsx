import React from 'react';
import s from "../../Common/HeaderCreateProject/HeaderCreateProject.module.sass";
import SvgLogo from "../../Common/Header/Logo/SvgLogo";
import {NavLink} from "react-router-dom";

const ThankyouHeader = () => {
  return (
    <header>
      <div className="container">
        <NavLink to="/" className={s.logo}>
          <SvgLogo/>
        </NavLink>
      </div>
    </header>
  );
};

export default ThankyouHeader;