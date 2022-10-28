import * as Yup from "yup";

export const CreateProjectSchema = Yup.object().shape({
  name: Yup.string()
    .max(60, 'Максимально допустимое количество символов 60')
    .required('Введите название'),
  short_description: Yup.string()
    .max(300, 'Максимально допустимое количество символов 300')
    .required('Введите описание'),
  cover_images_base64: Yup.array()
    .min(1, "Хотя бы 1 изображение")
    .required("required"),
  full_description: Yup.string()
    .required('Введите описание проекта')
    .min(1, 'Введите описание проекта')
    .max(31457280, 'Максимально допустимое количество символов'),
  fundraising_days_limit: Yup.number()
    .positive()
    .integer()
    .required('Введите поле')
    .max(60, 'Максимум 60 дней'),
  fundraising_ton_goal: Yup.number()
    .required('Введите поле')
    .min(1, 'Минимум 1')
    .max(1000000000000000, 'Максимум 1000000000000000'),
  project_category_id: Yup.number()
    .required('Выберите категорию'),
  project_geo: Yup.string()
    .max(128, 'Максимально допустимое количество символов 128')
    .required('Введите название'),
  awards: Yup.array()
    .min(1, "Хотя бы 1")
    .of(
      Yup.object().shape({
        name: Yup.string()
          .max(60, 'Максимально допустимое количество символов 60')
          .required('Введите название'),
        description: Yup.string()
          .max(300, 'Максимально допустимое количество символов 300')
          .required('Введите описание'),
        phone_number: Yup.string()
          .required('ddd')
          .max(17, 'Превышено допустимое количество символов'),
        // FieldA: Yup.string(),
        // FieldB: Yup.string()
        //   .when('FieldA', {
        //     is: (FieldA) => FieldA.length > 0,
        //     then: Yup.string()
        //       .required('Field is required')
        //   })
      })
    ),
  contact_name: Yup.string()
    .required('Введите поле')
    .max(128, 'Максимум 128 символов'),
  contact_email: Yup.string()
    .email('Неверный email')
    .required('Введите почту'),
  contact_tg: Yup.string()
    .required('Введите Telegram')
    .max(128, 'Максимум 128 символов'),
  fundraising_ton_address: Yup.string()
    .required('Введите номер кошелька'),
});