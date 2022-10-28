import React from 'react';
import s from './Award.module.sass'

import awardImg from './../../../../assets/images/award-img.png'
import useCheckScreen from "../../../../handlers/handler";

const Award = () => {
  return (
    <div className={s.award}>
      <h2>Вознаграждения</h2>
      <form className={s.form} autoComplete="off">
        <input type="radio" name="award-type" defaultChecked className={[s.awardRadio, 'form-radio-input'].join(' ')}
               id="award-type-1"
               value="award-type-1"/>
        <label htmlFor="award-type-1" className={[s.block, s.custom].join(' ')}>
          <div className={s.wrap}>
            <h4>Поддержать на любую сумму</h4>
            <div className={s.desc}>
              <p>Мне не нужно вознаграждение, я просто хочу поддержать проект</p>
            </div>
            <div className={s.customRow}>
              <label htmlFor="project-donate" className={s.customLabel}>
                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.531941,0 C13.9203541,0 14.3084876,0.0570454482 14.7140982,0.246148313 C15.2003137,0.472792116 15.4581372,0.830025254 15.6387814,1.09420999 C15.6528331,1.11476313 15.6659759,1.13594545 15.6781401,1.15761713 C15.8905229,1.53568304 16,1.94387958 16,2.38297573 C16,2.80019048 15.9007296,3.25473644 15.6781401,3.65090869 C15.6760428,3.65475366 15.6738756,3.65845882 15.6717084,3.66223389 L8.73550075,15.5771125 C8.58254038,15.8398991 8.30101779,16.0010385 7.99698457,16 C7.69295136,15.9989412 7.41254731,15.8357046 7.26147447,15.5718694 L0.452640544,3.68243748 L0.446768208,3.67272018 C0.290941574,3.41594576 0.0499660664,3.0188647 0.00781108202,2.50643438 C-0.030918373,2.03518026 0.0749934037,1.56301732 0.311774386,1.15363234 C0.548555368,0.744177447 0.905020153,0.416865206 1.3337706,0.21650705 C1.73602562,0.0285314627 2.14299075,0.00374994301 2.43528762,0.000491681648 L13.531941,0 Z M13.531941,1.70213551 L8.85105994,1.70213551 L8.85105994,11.9953435 L14.1966335,2.81277403 C14.2569648,2.70315729 14.2978614,2.54474432 14.2978614,2.38297573 C14.2978614,2.25175722 14.2706669,2.13780614 14.2098463,2.02035963 C14.1460196,1.92856958 14.1071503,1.87998308 14.0746427,1.84670657 C14.0467491,1.81825375 14.0252872,1.80301367 13.9949468,1.78889213 C13.8685517,1.72995914 13.7392205,1.70213551 13.531941,1.70213551 Z M7.14892136,1.70213551 L2.55318916,1.70213551 C2.25125321,1.70213551 2.13534448,1.7207312 2.05432022,1.75862169 C1.94225648,1.81091335 1.84815928,1.89697088 1.78524139,2.00574872 C1.72232351,2.11459647 1.69387064,2.24071165 1.70421714,2.36696665 C1.71015938,2.43932209 1.73966088,2.52209392 1.91366379,2.80906887 C1.91729905,2.81508102 1.92086439,2.82116307 1.92435983,2.82724512 L7.14892136,11.9502524 L7.14892136,1.70213551 Z"></path>
                </svg>
              </label>
              <div className={s.customInputWrap}>
                <input type="number" id="project-donate" defaultValue="10" className={['internal', s.customInput].join(' ')}/>
              </div>
              <button className="button submit full" type="submit">
                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10,0 L10,5.999 L16,6 L16,10 L10,10 L10,16 L6,16 L6,10 L0,10 L0,6 L6,6 L6,0 L10,0 Z"></path>
                </svg>
                <span>Поддержать</span>
              </button>
            </div>
          </div>
        </label>
        <input type="radio" name="award-type" className={[s.awardRadio, 'form-radio-input'].join(' ')} id="award-type-2"
               value="award-type-2"/>
        <label htmlFor="award-type-2" className={s.block}>
          <div className={s.wrap}>
            <h4>The Game!</h4>
            <div className={s.blockWrap}>
              <div className={s.blockInfo}>
                <div className={['img', s.blockImg].join(' ')}>
                  <img src={awardImg} alt="The Game!"/>
                </div>
                {useCheckScreen() || <div className={s.blockDelivery}>
                  <span>Доставка</span>
                  <p>Не требуется</p>
                </div>}
              </div>
              <div className={s.desc}>
                <p>Одна цифровая копия EXIT VEIL JRPG для ПК или консоли*
                  Цифровая копия артбука игры EXIT VEIL
                  Цифровой саундтрек EXIT VEIL
                  Цифровая художественная книга Таро.
                  Доступ к закрытой ежемесячной новостной рассылке KS в последнюю субботу каждого месяца.</p>
                <p>*Консольная опция станет доступной только после того, как будет достигнута дополнительная цель
                  «Консоль».</p>
                <p>Награды будут доставлены по мере их производства. Награды Таро прибудут раньше, чем игровые
                  награды.</p>
              </div>
              {!useCheckScreen() || <div className={s.blockDelivery}>
                <span>Доставка</span>
                <p>Не требуется</p>
              </div>}
            </div>
            <div className={s.blockOpen}>
              <div className="form-row">
                <input type="text"
                       className="form-input mail internal"
                       id="mail"
                       name="award-email"
                />
                <label className="form-label" htmlFor="mail">Электронная почта</label>
                <div className="form-error form-error-empty">Введите почту</div>
                <div className="form-error form-error-mail">Почтовый адрес введен некорректно</div>
                <div className="form-description">Укажите вашу электронную почту для получения<br/>вознаграждения
                </div>
              </div>
            </div>
            <div className={s.blockFooter}>
              <div className={s.blockAmount}>
                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.531941,0 C13.9203541,0 14.3084876,0.0570454482 14.7140982,0.246148313 C15.2003137,0.472792116 15.4581372,0.830025254 15.6387814,1.09420999 C15.6528331,1.11476313 15.6659759,1.13594545 15.6781401,1.15761713 C15.8905229,1.53568304 16,1.94387958 16,2.38297573 C16,2.80019048 15.9007296,3.25473644 15.6781401,3.65090869 C15.6760428,3.65475366 15.6738756,3.65845882 15.6717084,3.66223389 L8.73550075,15.5771125 C8.58254038,15.8398991 8.30101779,16.0010385 7.99698457,16 C7.69295136,15.9989412 7.41254731,15.8357046 7.26147447,15.5718694 L0.452640544,3.68243748 L0.446768208,3.67272018 C0.290941574,3.41594576 0.0499660664,3.0188647 0.00781108202,2.50643438 C-0.030918373,2.03518026 0.0749934037,1.56301732 0.311774386,1.15363234 C0.548555368,0.744177447 0.905020153,0.416865206 1.3337706,0.21650705 C1.73602562,0.0285314627 2.14299075,0.00374994301 2.43528762,0.000491681648 L13.531941,0 Z M13.531941,1.70213551 L8.85105994,1.70213551 L8.85105994,11.9953435 L14.1966335,2.81277403 C14.2569648,2.70315729 14.2978614,2.54474432 14.2978614,2.38297573 C14.2978614,2.25175722 14.2706669,2.13780614 14.2098463,2.02035963 C14.1460196,1.92856958 14.1071503,1.87998308 14.0746427,1.84670657 C14.0467491,1.81825375 14.0252872,1.80301367 13.9949468,1.78889213 C13.8685517,1.72995914 13.7392205,1.70213551 13.531941,1.70213551 Z M7.14892136,1.70213551 L2.55318916,1.70213551 C2.25125321,1.70213551 2.13534448,1.7207312 2.05432022,1.75862169 C1.94225648,1.81091335 1.84815928,1.89697088 1.78524139,2.00574872 C1.72232351,2.11459647 1.69387064,2.24071165 1.70421714,2.36696665 C1.71015938,2.43932209 1.73966088,2.52209392 1.91366379,2.80906887 C1.91729905,2.81508102 1.92086439,2.82116307 1.92435983,2.82724512 L7.14892136,11.9502524 L7.14892136,1.70213551 Z"></path>
                </svg>
                <span>150</span>
              </div>
              <button className={['button', s.submit].join(' ')} type="submit">
                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10,0 L10,5.999 L16,6 L16,10 L10,10 L10,16 L6,16 L6,10 L0,10 L0,6 L6,6 L6,0 L10,0 Z"></path>
                </svg>
                <span>Поддержать</span>
              </button>
            </div>
          </div>
        </label>
        <input type="radio" name="award-type" className={[s.awardRadio, 'form-radio-input'].join(' ')} id="award-type-3"
               value="award-type-3"/>
        <label htmlFor="award-type-3" className={s.block}>
          <div className={s.wrap}>
            <h4>The Game!</h4>
            <div className={s.blockWrap}>
              <div className={s.blockInfo}>
                <div className={['img', s.blockImg].join(' ')}>
                  <img src={awardImg} alt="The Game!"/>
                </div>
                {useCheckScreen() || <div className={s.blockDelivery}>
                  <span>Доставка</span>
                  <p>Есть</p>
                </div>}
              </div>
              <div className={s.desc}>
                <p>Одна цифровая копия EXIT VEIL JRPG для ПК или консоли*
                  Цифровая копия артбука игры EXIT VEIL
                  Цифровой саундтрек EXIT VEIL
                  Цифровая художественная книга Таро.
                  Доступ к закрытой ежемесячной новостной рассылке KS в последнюю субботу каждого месяца.</p>
                <p>*Консольная опция станет доступной только после того, как будет достигнута дополнительная цель
                  «Консоль».</p>
                <p>Награды будут доставлены по мере их производства. Награды Таро прибудут раньше, чем игровые
                  награды.</p>
              </div>
              {!useCheckScreen() || <div className={s.blockDelivery}>
                <span>Доставка</span>
                <p>Есть</p>
              </div>}
            </div>
            <div className={s.blockOpen}>
              <div className="form-radio">
                <div className="form-radio-item">
                  <input type="radio" name="delivery-type" defaultChecked value="delivery"
                         className="form-radio-input internal" id="award-delivery"/>
                  <label htmlFor="award-delivery" className="label form-radio-label">Доставка</label>
                </div>
                <div className="form-radio-item">
                  <input type="radio" name="delivery-type" value="pickup"
                         className="form-radio-input internal" id="award-pickup"/>
                  <label htmlFor="award-pickup" className="label form-radio-label">Самовывоз</label>
                </div>
              </div>
              <div className={['choose', s.delivery].join(' ')}>
                <div className="form-row">
                  <input type="text" className="form-input internal" id="award-address" name="award-address"/>
                  <label className="form-label" htmlFor="award-address">Адрес доставки</label>
                  <div className="form-error form-error-empty">Введите адрес</div>
                  <div className="form-description">Страна, город, улица, дом, квартира, индекс</div>
                </div>
                <div className="form-row">
                  <input type="text" className="form-input internal" id="award-name" name="award-name"/>
                  <label className="form-label" htmlFor="award-name">Ф.И.О.</label>
                  <div className="form-error form-error-empty">Введите Ф.И.О.</div>
                  <div className="form-description"></div>
                </div>
                <div className="form-row">
                  <input type="text"
                         className="form-input mail internal"
                         id="mail-2"
                         name="award-email-2"
                  />
                  <label className="form-label" htmlFor="mail-2">Электронная почта</label>
                  <div className="form-error form-error-empty">Введите почту</div>
                  <div className="form-error form-error-mail">Почтовый адрес введен некорректно</div>
                  <div className="form-description"></div>
                </div>
                <div className="form-row">
                  <input type="text" className="form-input tel internal" id="award-phone"
                         name="award-phone"/>
                  <label htmlFor="award-phone" className="form-label">Телефон</label>
                  <div className="form-error form-error-empty">Введите телефон</div>
                </div>
              </div>
              <div className={['choose', s.pickup].join(' ')}>
                <div className={s.pickupBox}>
                  <div className={s.pickupBoxTitle}>Где забрать</div>
                  <address className={s.pickupBoxDesc}>Россия, Ижевск, ул. Ленина 76, офис 245. По будням с 10 до
                    18.
                  </address>
                </div>
                <div className={s.pickupBox}>
                  <div className={s.pickupBoxTitle}>Телефон для связи</div>
                  <a href="tel:79080000000" className={s.pickupBoxDesc}>+7 908 000 00 00</a>
                </div>
              </div>
            </div>
            <div className={s.blockFooter}>
              <div className={s.blockAmount}>
                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.531941,0 C13.9203541,0 14.3084876,0.0570454482 14.7140982,0.246148313 C15.2003137,0.472792116 15.4581372,0.830025254 15.6387814,1.09420999 C15.6528331,1.11476313 15.6659759,1.13594545 15.6781401,1.15761713 C15.8905229,1.53568304 16,1.94387958 16,2.38297573 C16,2.80019048 15.9007296,3.25473644 15.6781401,3.65090869 C15.6760428,3.65475366 15.6738756,3.65845882 15.6717084,3.66223389 L8.73550075,15.5771125 C8.58254038,15.8398991 8.30101779,16.0010385 7.99698457,16 C7.69295136,15.9989412 7.41254731,15.8357046 7.26147447,15.5718694 L0.452640544,3.68243748 L0.446768208,3.67272018 C0.290941574,3.41594576 0.0499660664,3.0188647 0.00781108202,2.50643438 C-0.030918373,2.03518026 0.0749934037,1.56301732 0.311774386,1.15363234 C0.548555368,0.744177447 0.905020153,0.416865206 1.3337706,0.21650705 C1.73602562,0.0285314627 2.14299075,0.00374994301 2.43528762,0.000491681648 L13.531941,0 Z M13.531941,1.70213551 L8.85105994,1.70213551 L8.85105994,11.9953435 L14.1966335,2.81277403 C14.2569648,2.70315729 14.2978614,2.54474432 14.2978614,2.38297573 C14.2978614,2.25175722 14.2706669,2.13780614 14.2098463,2.02035963 C14.1460196,1.92856958 14.1071503,1.87998308 14.0746427,1.84670657 C14.0467491,1.81825375 14.0252872,1.80301367 13.9949468,1.78889213 C13.8685517,1.72995914 13.7392205,1.70213551 13.531941,1.70213551 Z M7.14892136,1.70213551 L2.55318916,1.70213551 C2.25125321,1.70213551 2.13534448,1.7207312 2.05432022,1.75862169 C1.94225648,1.81091335 1.84815928,1.89697088 1.78524139,2.00574872 C1.72232351,2.11459647 1.69387064,2.24071165 1.70421714,2.36696665 C1.71015938,2.43932209 1.73966088,2.52209392 1.91366379,2.80906887 C1.91729905,2.81508102 1.92086439,2.82116307 1.92435983,2.82724512 L7.14892136,11.9502524 L7.14892136,1.70213551 Z"></path>
                </svg>
                <span>150</span>
              </div>
              <button className={['button', s.submit].join(' ')} type="submit">
                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10,0 L10,5.999 L16,6 L16,10 L10,10 L10,16 L6,16 L6,10 L0,10 L0,6 L6,6 L6,0 L10,0 Z"></path>
                </svg>
                <span>Поддержать</span>
              </button>
            </div>
          </div>
        </label>
      </form>
    </div>
  );
};

export default Award;