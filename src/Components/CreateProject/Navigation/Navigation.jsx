import React from 'react';
import s from './Navigation.module.sass'
import {NavLink, useLocation} from "react-router-dom";
import {useFormikContext} from "formik";


const Navigation = ({isSubmitting}) => {
  const arr = ['/', '/create-project', '/create-project/info', '/create-project/award', '/create-project/contacts', '/create-project/wallet'];
  const current = useLocation().pathname
  const index = arr.findIndex(el => current === el)
  const {isValid, errors, submitCount} = useFormikContext();

  const closeError = () => {
    const box = document.querySelector(`.${s.errorBox}`);
    box.style.display = "none";
  }

  if (!isValid && errors && submitCount) {
    const arr = Array.from(document.getElementsByClassName('check-link'));
    arr.forEach(el => {
      el.classList.remove('error');
      let inputs = el.dataset.check;
      for (let key in errors) {
        if (inputs.includes(key)) {
          el.classList.add('error')
        }
      }
    })
  }

  return (
    <div className={s.navigation}>
      <NavLink to={arr[index - 1]} className={s.back}>
        <svg viewBox="0 0 36 22" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.5606602,0.439339828 C12.109835,0.988514613 12.1441584,1.85757702 11.6636304,2.44673776 L11.5606602,2.56066017 L5.12,9 L34.5065848,9 C35.3313753,9 36,9.67157288 36,10.5 C36,11.2796961 35.4077234,11.9204487 34.6504107,11.9931334 L34.5065848,12 L5.12,12 L11.5606602,18.4393398 C12.109835,18.9885146 12.1441584,19.857577 11.6636304,20.4467378 L11.5606602,20.5606602 C11.0114854,21.109835 10.142423,21.1441584 9.55326224,20.6636304 L9.43933983,20.5606602 L0.439339828,11.5606602 C-0.109834957,11.0114854 -0.144158381,10.142423 0.336369556,9.55326224 L0.439339828,9.43933983 L9.43933983,0.439339828 C10.0251263,-0.146446609 10.9748737,-0.146446609 11.5606602,0.439339828 Z"></path>
        </svg>
        <span>Назад</span>
      </NavLink>
      {index !== arr.length - 1
        ? <NavLink to={arr[index + 1]} className='next button white'>Далее</NavLink>
        : <button type="submit" disabled={isSubmitting} className='next button white'>Отправить</button>
      }
      {!isValid && errors && submitCount ? <div className={s.errorBox}>
        <div className={[s.close, 'close'].join(' ')} onClick={closeError}></div>
        <svg version="1.1" width="19px" height="17px" viewBox="0 0 19 17" xmlns="http://www.w3.org/2000/svg">
          <path fill="#d93444"
                d="M10.2604213,0.217864162 C10.4712096,0.348437415 10.6474525,0.531240353 10.77334,0.749874637 L18.7899541,14.6726746 C19.2099858,15.4021619 18.9803443,16.3467053 18.2770353,16.7823713 C18.0471136,16.9247967 17.784305,17 17.5165005,17 L1.48327244,17 C0.664083691,17 0,16.311198 0,15.4615177 C0,15.1837452 0.072504518,14.9111544 0.20981887,14.6726746 L8.22643291,0.749874637 C8.64646467,0.0203873403 9.55711227,-0.217801863 10.2604213,0.217864162 Z M9.10782258,1.22619261 L9.07540196,1.27577005 L1.05878792,15.19857 C1.01301646,15.2780633 0.988848292,15.3689269 0.988848292,15.4615177 C0.988848292,15.724514 1.17971588,15.9412715 1.42561214,15.970895 L1.48327244,15.9743452 L17.5165005,15.9743452 C17.6057687,15.9743452 17.6933715,15.9492774 17.7700121,15.9018023 C17.987703,15.7669533 18.0692548,15.4858453 17.967694,15.2516855 L17.940985,15.19857 L9.924371,1.27577005 C9.89289912,1.22111148 9.85198561,1.17317128 9.80385373,1.13425549 L9.75339807,1.09843322 C9.53570719,0.963584217 9.2584241,1.02241129 9.10782258,1.22619261 Z M9.49991738,12.3391505 C9.70015082,12.3391505 9.87319206,12.4165584 10.0190411,12.5713742 C10.1648901,12.72619 10.2390507,12.9121014 10.2415227,13.1291082 C10.2390507,13.2746615 10.2038244,13.4076443 10.1358439,13.5280566 C10.0678635,13.6484689 9.97825281,13.7444018 9.86701201,13.8158553 C9.75577122,13.8873087 9.63340634,13.9230355 9.49991738,13.9230355 C9.29473991,13.9230355 9.11922665,13.8456276 8.9733776,13.6908117 C8.82752856,13.5359959 8.75584004,13.3487614 8.75831206,13.1291082 C8.75584004,12.9121014 8.82752856,12.72619 8.9733776,12.5713742 C9.11922665,12.4165584 9.29473991,12.3391505 9.49991738,12.3391505 Z M10.1080337,5.71779671 L10.0116251,11.5094964 L8.98450168,11.5094964 L8.88809299,5.71779671 L10.1080337,5.71779671 Z"></path>
        </svg>
        <h3>Кажется вы что-то пропустили</h3>
        <p>Одно или несколько полей не заполнены или заполнены неверно. Пожалуйста, вернитесь назад и проверьте,
          что все поля заполнены верно.</p>
      </div>
      : ''
      }
    </div>
  );
};

export default Navigation;