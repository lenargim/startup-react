import React from 'react';
import s from './ProjectForm.module.sass'
import {FieldArray} from "formik";
import AwardItem from "./AwardItem";

const Award = ({values, setFieldValue}) => {
  return (
    <div className={s.wrap}>
      <h2>Добавьте вознаграждения</h2>
      <FieldArray
        name={'awards'}
        render={arrayHelpers => (
          <div>
            {values.awards.map((award, index) => (
              <div key={index}>
                <AwardItem setFieldValue={setFieldValue} award={award} index={index} arrayHelpers={arrayHelpers}/>
              </div>
            ))}
            <button type="button"
                    className="form-award-label"
                    onClick={() => arrayHelpers.push({
                      name: '',
                      description: '',
                      image_base64: '',
                      amount_ton: '',
                      need_delivery: false,
                      ask_contact_info: false,
                      is_pickup_available: false,
                      pickup_info: '',
                      phone_number: '',
                      new: true
                    })}
            >Добавить ещё вознаграждение
            </button>
          </div>
        )}
      />
    </div>
  );
};

export default Award;