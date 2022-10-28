import React from 'react';
import s from './Data.module.sass'
import Navigation from "../../Common/Navigation/Navigation";

import author from '../../../assets/images/author.png'
import Tech from "../../Svg/Tech";
import Location from "../../Svg/Location";



const Data = () => {
  return (
    <div className={s.data}>
      <div className={s.author}>
        <div className={[s.authorImg, 'img'].join(' ')}>
          <img src={author} alt="Алексей Коваль"/>
        </div>
        <span>by</span>
        <div className={s.authorName}>Алексей Коваль</div>
      </div>
      {/*classes:  tech  business game  other  photo  sport  crypto*/}
      <div className={[s.tag].join(' ')}>
        <Tech />
        <span>Технологии</span>
      </div>
      <div className={s.location}>
        <Location />
        <span>Екатеринбург, Россия</span>
      </div>
      <Navigation styles={s.navigation}/>
    </div>
  );
};

export default Data;