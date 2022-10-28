import React from 'react';
import s from './ProjectForm.module.sass'
import walletImg from './../../../assets/images/wallet.svg'
import {TextInput} from "../../Common/Form/Form";
import {Field, useField} from "formik";

const Wallet = () => {
  const [field] = useField('authorization_ton_address')
  return (
    <div className={s.wrap}>
      <h2>Счёт и авторизация</h2>
      <div className={[s.formBlock, s.wallet].join(' ')}>
        <div className="create-project__form-text create-project__form-text_wallet">
          <h4>Укажите кошелёк</h4>
          <div className={s.description}>Укажите свой кошелёк в качестве счёта на который будут поступать средства
            собранные на ваш проект.
          </div>
        </div>
        <div className={s.walletWrap}>
          <label htmlFor="fundraising_ton_address">
            <img src={walletImg} className={s.walletImg}/>
          </label>
          <TextInput
            name="fundraising_ton_address"
            label="Номер кошелька"
            className={[s.formRow].join(' ')}
          />
        </div>
        <div className={s.formBlock}>
          <div className={s.formText}>
            <h4>Авторизация</h4>
            <div className={s.description}>Выберите один из кошельков в качестве способа авторизации и&nbsp;доступа в
              личный кабинет.
            </div>
          </div>
          <div className="form-row form-wallet">
            <Field
              type="radio"
              className="form-wallet-input"
              name="authorization_ton_address"
              id="authorization_ton_address"
              value={field.value}
            />
            <label className="form-wallet-label tonkeeper" htmlFor="authorization_ton_address">Tonkeeper</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;