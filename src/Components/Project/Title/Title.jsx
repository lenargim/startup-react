import React from 'react';
import s from './Title.module.sass'

const Title = () => {
  return (
    <div className={s.wrap}>
      <h1 className={s.title}>EXIT VEIL: Оккультизм и&nbsp;Таро JRPG</h1>
      <div className={s.desc}>EXIT VEIL от создателей Tokyo Dark — это JRPG на оккультную тематику с полностью
        интегрированной колодой Таро, которая в настоящее время разрабатывается для ПК и консолей..
      </div>
    </div>
  );
};

export default Title;