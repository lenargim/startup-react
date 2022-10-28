import React from 'react';
import s from './Info.module.sass'
import SvgLockMoney from "../../../../Svg/LockMoney";

const Info = () => {
  return (
    <div className={s.Info}>
      <div className={s.title}>
        <SvgLockMoney/>
        <span>3 этапа</span>
      </div>
      <p className={s.text}>
        В случае удачного сбора средств, разблокировка и поступление на счёт команды проекта произойдёт через 3
        месяца. За ходом выполнения проекта вы смоеже следить в раздаеле Запущенные проекты
      </p>
    </div>
  );
};

export default Info;