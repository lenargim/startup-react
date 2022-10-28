import React from 'react';
import {NavLink} from "react-router-dom";
import Navigation from "../../Common/Navigation/Navigation";
import s from './styles.module.sass'
import Slider from "./Slider/Slider";

const New = () => {
  return (
    <div className={s.new}>
      <div className={s.title}>
        <h2>Новые проекты</h2>
        <div className={s.right}>
          <NavLink to={'#'}>Смотреть все</NavLink>
          <Navigation/>
        </div>
      </div>
      <Slider/>
    </div>
  );
};

export default New;