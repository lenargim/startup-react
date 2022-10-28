import React from 'react';
import s from './ProjectSidebar.module.sass'

const SidebarInfo = () => {
  return (
    <>
      <h3>Рекомендации</h3>
      <ul className={s.sidebarList}>
        <li className={s.sidebarItem}>Мотивируйте. Создавайте чувство доверия и сопричастности к чему-то
          значимому
        </li>
        <li className={s.sidebarItem}>Иллюстрируйте. Добавляйте фотографии и используйте инфографику
          (ширина поля описания 780 px)
        </li>
        <li className={s.sidebarItem}>Структурируйте. Разделите текст на смысловые блоки при помощи
          заголовков и абзацев
        </li>
      </ul>
    </>
  );
};

export default SidebarInfo;