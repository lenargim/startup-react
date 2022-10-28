import React from 'react';
import s from './ProjectForm.module.sass'
import {TextInput} from "../../Common/Form/Form";

const Contacts = () => {
  return (
    <div className={s.wrap}>
      <h2>Контакты</h2>
      <div>
        <div className={s.formText}>
          <div className={s.description}>Имя позволит пользователям запомнить вас и повысит доверие к&nbsp;вашему
            проекту
          </div>
        </div>
        <TextInput
          className={s.formRow}
          name="contact_name"
          label="Имя, никнейм или название проекта"
        />
      </div>
      <div className={[s.formBlock, s.contactsData].join(' ')}>
        <div className={s.formText}>
          <div className={s.description}>Контактные данные не будут публиковаться и необходимы исключительно для связи
            команды Startup Market с вами
          </div>
        </div>
        <div className="form-row-wrap">
          <TextInput
            className={s.formRow}
            name="contact_email"
            label="Электронная почта"
          />
          <TextInput
            className={s.formRow}
            name="contact_tg"
            label="Телеграм"
          />
        </div>
      </div>
    </div>
  );
};

export default Contacts;