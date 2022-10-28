import React from 'react';
import {ErrorMessage, Field, useField} from "formik";
import Select from "react-select";
import Input from 'react-phone-number-input/input'

export const TextInput = ({
                            className = '',
                            name,
                            label,
                            desc = '',
                            counter = 0,
                            disabled = false,
                            descClassName = '',
                          }) => {
  const [field, meta] = useField(name);
  const error = meta.error;
  const touched = meta.touched;
  const length = field.value ? field.value.length : 0

  return (
    <div className={['form-row', error && touched ? 'error' : '', className].join(' ')}>
      <Field className={['form-input', length ? 'focused' : ''].join(' ')}
             type="text"
             name={name}
             id={name}
             disabled={disabled}
      />
      <label className="form-label" htmlFor={name}>{label}</label>
      <ErrorMessage name={name} component="div" className="form-error"/>
      <div className={['form-description', descClassName].join(' ')}>{desc}</div>

      {counter ? <div className="form-counter">
        <span className="current">{length}</span>/
        <span className="max">{counter}</span>
      </div> : ''}
    </div>
  );
};

export const PhoneInputMask = ({className = '', name, label, disabled = false}) => {
  const [field, meta, helpers] = useField(name);
  const error = meta.error;
  const touched = meta.touched;
  const length = field.value ? field.value.toString().length : 0

  return (
    <div className={['form-row', error && touched ? 'error' : '', className].join(' ')}>
      <Field name={name}>
        {() => {
          return <Input
            name={name}
            id={name}
            type="text"
            international
            value={field.value}
            onChange={(value) => {
              helpers.setValue(value);
              helpers.setTouched(true);
            }}
            className={['form-input', length ? 'focused' : ''].join(' ')}
            disabled={disabled}
          />
        }}
      </Field>
      <label className="form-label" htmlFor={name}>{label}</label>
      <ErrorMessage name={name} component="div" className="form-error"/>
    </div>
  );
};


export const TextAreaInput = ({
                                className,
                                name,
                                label,
                                counter = 0,
                                desc = '',
                                disabled = false,
                              }) => {
  const [field, meta] = useField(name);
  const error = meta.error;
  const touched = meta.touched;
  const length = field.value ? field.value.length : 0
  return (
    <div className={['form-row', error && touched && 'error', className].join(' ')}>
      <Field as="textarea"
             className={['form-input', length && 'focused'].join(' ')}
             name={name}
             id={name}
             disabled={disabled}
      />
      <label className="form-label" htmlFor={name}>{label}</label>
      <ErrorMessage name={name} component="div" className="form-error"/>
      <div className="form-description">{desc}</div>
      {counter && <div className="form-counter">
        <span className="current">{length}</span>/
        <span className="max">{counter}</span>
      </div>}
    </div>
  );
};

export const SelectInput = ({name, className = '', options = []}) => {

  const [field, meta, helpers] = useField(name)


  let pluginOptions = options.map(({name, id, ...n}) => (
    n.label = name, n.value = id, n))

  const selectStyles = {
    control: () => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1em',
      width: '100%',
      position: 'relative',
      font: '400 16px/20px Inter, sans-serif',
      color: '#4a4a4a',
      border: '1px solid #ced4da',
      padding: '16px',
      borderRadius: 4,
    }),
    container: () => ({
      width: "100%",
    }),
    input: () => ({
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
    }),
    valueContainer: () => ({
      padding: 0,
    }),
    placeholder: () => ({
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
    }),
    singleValue: () => ({
      margin: 0,
    }),
  }
  const selectedComponents = {
    IndicatorSeparator: () => null,
    DropdownIndicator: () => {
      return <svg viewBox="0 0 17 17" width={12} height={12} xmlns="http://www.w3.org/2000/svg">
        <path fill="#ced4da" transform="rotate(-45)"
              d="M1.5,0 C2.27969612,0 2.92044868,0.594888083 2.99313342,1.35553999 L3,1.5 L3,10 L11.5,10 C12.3284271,10 13,10.6715729 13,11.5 C13,12.2796961 12.4051119,12.9204487 11.64446,12.9931334 L11.5,13 L1.5,13 C0.720303883,13 0.0795513218,12.4051119 0.00686657806,11.64446 L0,11.5 L0,1.5 C0,0.671572875 0.671572875,0 1.5,0 Z"></path>
      </svg>
    }
  }
  return (
    <div className={['form-row form-row-select', meta.error && 'error', className].join(' ')}>
      <Select id={name}
              options={pluginOptions}
              placeholder={'Категория'}
              value={pluginOptions ? pluginOptions.find(option => option.value === field.value) : ''}
              noOptionsMessage={() => 'Категорий не найдено'}
              styles={selectStyles}
              components={selectedComponents}
              onChange={option => {
                helpers.setValue(option.value)

              }}
      />
      {/*<ErrorMessage name={name} component="div" className="form-error form-error-empty"/>*/}
      {meta.error ? <div className="form-error">{meta.error}</div> : ''}
    </div>
  );
};

export const NumberInput = ({
                              name,
                              className = '',
                              desc = '',
                              label,
                              disabled = false
                            }) => {
  const [field, meta] = useField(name);
  const error = meta.error;
  const touched = meta.touched;
  const length = field.value ? field.value.toString().length : 0

  return (
    <div className={['form-row form-number', error && touched && 'error', className].join(' ')}>
      <Field type="number"
             className={['form-input form-number-input', length && 'focused'].join(' ')}
             name={name}
             id={name}
             disabled={disabled}
      />
      <label className="form-label" htmlFor={name}>{label}</label>
      <ErrorMessage name={name} component="div" className="form-error"/>
      <div className="form-price-desc">{desc}</div>
    </div>
  );
};

export const RadioInput = ({name, value, label}) => {
  return (
    <div className={['form-radio-item'].join(' ')}>
      <Field type="radio"
             name={name}
             value={value}
             className="form-radio-input"
             id={`${name}_${value}`}
      />
      <label htmlFor={`${name}_${value}`} className="label form-radio-label">{label}</label>
    </div>
  );
};

export const CheckboxInput = ({name, label, disabled = false}) => {
  return (
    <div className={['form-row form-checkbox'].join(' ')}>
      <Field type="checkbox" name={name}
             className="form-checkbox-input"
             id={name}
             disabled={disabled}
      />
      <label htmlFor={name} className="form-checkbox-label label">{label}</label>
    </div>
  );
};

export const CheckInput = ({name, label, disabled = false}) => {
  return (
    <div className={['form-row form-check'].join(' ')}>
      <Field type="checkbox" name={name}
             className="form-check-input"
             id={name}
             disabled={disabled}
      />
      <label htmlFor={name} className="form-check-label label">{label}</label>
    </div>
  );
};


// export const TextEditorInput = ({name}) => {
//   const [field, meta, helpers] = useField({name});
//
//   const {value} = field;
//   const {touched, error} = meta;
//   const {setValue, setTouched} = helpers;
//
//   const modules = {
//     toolbar: [
//       [{'header': [1, 2, false]}],
//       ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//       [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
//       ['link', 'image'],
//       ['clean']
//     ],
//   };
//   const formats = [
//     'header',
//     'bold', 'italic', 'underline', 'strike', 'blockquote',
//     'list', 'bullet', 'indent',
//     'link', 'image'
//   ];
//
//   const handleChange = (value) => {
//     setValue(value);
//     setTouched(true, true)
//   };
//
//
//   return (
//     <div>
//       <ReactQuill
//         modules={modules}
//         formats={formats}
//         theme="snow"
//         defaultValue={value}
//         onChange={handleChange}
//         onBlur={handleChange}
//         style={{
//           height: 400
//         }}
//       />
//       {error && touched && (
//         <div className="error">
//           <ErrorMessage message={error} name={name}/>
//         </div>
//       )}
//     </div>
//   );
// };
