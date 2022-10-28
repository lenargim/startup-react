import React, {useRef} from 'react';
import s from './ProjectForm.module.sass'
import {Editor} from "@tinymce/tinymce-react";
import {editorAPIKey} from "../../../handlers/handler";
import {Field, useField} from "formik";

const Info = () => {
  const editorRef = useRef(null);
  const [field, , helpers] = useField('full_description')
  const log = (val) => {
    helpers.setTouched(true)
    helpers.setValue(val)
    console.log(field.value)
  };

  return (
    <div className={s.wrap}>
      <div className={s.describe}>
        <h2>Опишите свой проект</h2>
        <div className={s.mainDescription}>
          <p>Описание проекта должно быть четким и увлекательным. Расскажите всем, почему вы делаете этот проект,
            как возникла идея и зачем вам нужна поддержка.
            Убедите людей в том, что только с их помощью проект может стать успешным.</p>
          <p>Допустимые форматы изображений: JPEG, PNG, BMP или GIF. Максимальный размер одного файла 5 МБ.</p>
        </div>
        <Field name="full_description">
          {({meta}) => {
            return <div className={['form-row', meta.error ? 'error' : ''].join(' ')}>
              <Editor
                apiKey={editorAPIKey}
                onEditorChange={(newValue, editor) => log(newValue, editor)}
                value={field.value}
                onInit={(evt, editor) => editorRef.current = editor}
                init={{
                  selector: '.tinymce-editor',
                  plugins: 'image',
                  toolbar: [
                    {name: 'styles', items: ['styles']},
                    {name: 'formatting', items: ['bold', 'italic']},
                    {name: 'alignment', items: ['alignleft', 'aligncenter', 'alignright', 'alignjustify']},
                    {name: 'image', items: ['image']},
                  ],
                  a11y_advanced_options: true,
                  file_picker_types: 'image',
                  images_file_types: 'jpg,jpeg,webp,png',
                  height: "420",
                  language: 'ru',
                  menubar: false,
                  statusbar: false,
                  automatic_uploads: true,
                  file_picker_callback: function (cb) {
                    const input = document.createElement("input");
                    input.setAttribute("type", "file");
                    input.setAttribute("accept", ".png, .jpg, .jpeg .bmp, .gif");

                    input.onchange = function () {
                      const file = this.files[0];
                      if (file.size > 5242880) {
                        alert('Max image size 5MB');
                        return;
                      }
                      const reader = new FileReader();
                      reader.onload = function () {
                        //console.log(image)
                        const id = "blobid" + new Date().getTime();
                        const blobCache = editorRef.current.editorUpload.blobCache;
                        const base64 = reader.result.split(",")[1];
                        const blobInfo = blobCache.create(id, file, base64);
                        blobCache.add(blobInfo);
                        cb(blobInfo.blobUri(), {title: file.name});
                      };
                      reader.readAsDataURL(file);
                    };
                    input.click();
                  },
                  content_style: 'body { font-size:16px }',
                  mobile: {
                    height: "300",
                  }
                }}
              />
              {meta.error && meta.touched ? <div className="form-error">{meta.error}</div> : ''}
            </div>
          }}
        </Field>
      </div>
    </div>
  );
};

export default Info;