import React, {useEffect, useState} from 'react';
import {
  NumberInput,
  RadioInputBoolean,
  SelectInput,
  TextAreaInput,
  TextInput
} from "../../Common/Form/Form";
import s from './ProjectForm.module.sass'
import {readFileAsUrl} from "../../../handlers/fileReader";
import {useField} from "formik";
import {categoriesAPI} from "../../../api/api";


const General = ({setFieldValue, getFieldProps}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoriesAPI.getCategories().then(data => {
      if (data.status === 200) {
        setCategories(data.data)
      }
    })
      .catch(console.error);
  }, [])

  React.useEffect(() => {
    if (getFieldProps('is_project_global').value === 'true') {
      setFieldValue('project_geo', 'No city chosen')
    } else {
      setFieldValue('project_geo', '')
    }
  }, [getFieldProps('is_project_global').value]);

  React.useEffect(() => {
    if (getFieldProps('is_fundraising_limited').value === 'false') {
      setFieldValue('fundraising_days_limit', 0)
    } else {
      if (getFieldProps('fundraising_days_limit').value === 0) {
        setFieldValue('fundraising_days_limit', '')
      }
    }
  }, [getFieldProps('is_fundraising_limited').value]);

  const [ , meta_img] = useField('cover_images_base64');
  const error = meta_img.error;
  const touched = meta_img.touched;


  return (
    <div className={s.wrap}>
      <h2>Начнём с основного</h2>
      <div className={[s.formBlock, s.name].join(' ')}>
        <div className={s.formText}>
          <h3>Название проекта</h3>
          <div className={s.description}>Должно быть простым, запоминающимся и отражать суть вашего проекта.</div>
        </div>
        <TextInput className={s.formRow}
                   name={'name'}
                   label={'Название проекта'}
                   counter="60"
        />
      </div>
      <div className={[s.formBlock, s.desc].join(' ')}>
        <div className={s.formText}>
          <h3>Краткое описание проекта</h3>
          <div className={s.description}>Отобразится в миниатюре вашего проекта. Заинтересуйте возможных
            спонсоров,
            подберите
            краткое и цепляющее описание.
          </div>
        </div>
        <TextAreaInput className={s.formRow}
                       name={'short_description'}
                       counter="300"
                       label="Описание проекта"
        />
      </div>
      <div className={[s.formBlock, s.label].join(' ')}>
        <div className={s.formText}>
          <h3>Обложка</h3>
          <div className={s.description}>Выберите яркое и привлекательное изображение.
            Обложка проекта должна отображать вашу идею и притягивать внимание.
          </div>
        </div>

        <div className={[s.formRow, error && touched ? 'error' : '', 'form-row form-row-file'].join(' ')}>
          <input type="file" multiple
                 accept=".png, .jpg, .jpeg"
                 className="form-file"
                 id="cover_images_base64"
                 name="cover_images_base64"
                 onChange={(e) => {
                   let files = e.currentTarget.files;
                   if (!files.length) return;
                   let value = getFieldProps('cover_images_base64').value;

                   if (files.length > 4 || value.length >= 4) {
                     alert('Максимум 4 изображения');
                     return;
                   }
                   for (let i = 0; i < files.length; i++) {
                     readFileAsUrl(files[i]).then(url => {
                       const image = new Image();
                       image.src = url;
                       image.onload = function () {
                         const height = this.height;
                         const width = this.width;
                         if (width < 1300 || height < 732) {
                           alert("Минимальное разрешение 1300×732 пикселей");
                           return false;
                         }
                         value.push(url)
                         setFieldValue('cover_images_base64', value);
                       }
                     })
                   }
                 }}
          />
          <FileBox/>
          <div className="form-file-explain">
            <div className="form-file-desc">JPEG или PNG. Минимальное разрешение 1300×732 пикселей (16:9).
            </div>
            <label className="form-file-label button blue" htmlFor="cover_images_base64">Загрузить</label>
          </div>
          <div className="form-counter-photo form-counter">
            <span className="current">{getFieldProps('cover_images_base64').value.length}</span>/<span
            className="max">4</span>
          </div>
          {error && touched ? <div className="form-error">{error}</div> : ''}
        </div>
      </div>
      <div className={[s.category, s.formBlock].join(' ')}>
        <div className={s.formText}>
          <h3>Категория</h3>
        </div>
        <SelectInput name="project_category_id"
                     options={categories}
                     className={s.formRow}
        />
      </div>
      <div className={[s.formBlock, s.location].join(' ')}>
        <div className={s.formRow}>
          <h3>Локация</h3>
        </div>
        <div className="form-radio">
          <RadioInputBoolean name="is_project_global" value={true} label="Мой проект глобальный"/>
          <RadioInputBoolean name="is_project_global" value={false} label="Мой проект в конкретном городе/регионе/стране"/>
        </div>
        {
          getFieldProps('is_project_global').value
            ? <>
              <div className="form-radio-description">
                <p>Глобальный проект — это проект реализация и деятельность которого доступна в любой точке мира, это
                  может
                  быть сервис доступный в интернете, мобильное приложение, софт и т.п.</p>
              </div>
            </>
            : <div className="form-radio-description">
              <TextInput name="project_geo" label="Укажите страну или город"/>
            </div>
        }
      </div>
      <div className={[s.formBlock, s.type].join(' ')}>
        <div className={s.formRow}>
          <h3>Тип сбора средств</h3>
        </div>
        <div className="form-radio form-radio_border">
          <RadioInputBoolean name="is_fundraising_limited" context="type" value={true} label="Всё и даже больше"/>
          <RadioInputBoolean name="is_fundraising_limited" context="type" value={false} label="Всё или ничего"/>
        </div>

        {
          getFieldProps('is_fundraising_limited').value
            ? <div className="form-radio-description">
              <p>Проект может собрать больше указанной суммы так как пользователи смогут финансировать ваш проект до
                истечения срока сбора, даже если вы уже собрали необходимую сумму.</p>
              <p>Проект будет считаться состоявшимся в случае сбора 60% от заявленной суммы.</p>
            </div>
            : <div className="form-radio-description">
              <p>Время сбора не ограничено — собирайте столько времени, сколько нужно. Проект завершается в момент
                достижения 100% суммы.</p>
            </div>
        }
      </div>
      <div className="form-row-wrap">
        {
          getFieldProps('is_fundraising_limited').value
            ? <NumberInput name="fundraising_days_limit"
                           label="Дней сбора"
                           desc="максимум 60 дней"
                           className={['form-days', s.formRow].join(' ')}
            />
            : ''
        }
        <NumberInput name="fundraising_ton_goal"
                     label="Сумма сбора"
                     desc=""
                     className={s.formRow}
        >
          {/*<img src={Wallet_Extension} className="form-price-desc form-price-desc_img"/>*/}
        </NumberInput>
      </div>
    </div>
  );
};

export default General;


const FileBox = () => {
  const [field, , helpers] = useField('cover_images_base64');

  const deleteImg = (i) => {
    const newArr = field.value.filter((el, index) => index !== i);
    helpers.setValue(newArr)
  }

  let content = []
  const initial = field.value

  for (let i = 0; i < 4; i++) {
    let item;
    item = initial[i]
      ? <div key={i} className="form-file-img uploaded">
        <img src={initial[i]}/>
        <div className="close" onClick={() => {
          deleteImg(i)
        }}></div>
      </div>
      : <div key={i} className="form-file-img"></div>
    content.push(item)
  }
  return <div className="form-file-box">{content}</div>;
};