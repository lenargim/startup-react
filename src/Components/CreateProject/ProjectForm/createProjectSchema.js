import * as Yup from "yup";
import {boolean} from "yup";

const tonRegex = 'EQ([\\w\\_\\-]){46}'

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
  is_fundraising_limited: boolean(),
  fundraising_days_limit: Yup.number()
    .when('is_fundraising_limited', {
      is: true,
      then: (CreateProjectSchema) => CreateProjectSchema
        .positive('Количество дней больше 0')
        .integer('Должно быть целое число')
        .required('Введите количество дней')
        .max(60, 'Максимум 60 дней'),
    }),
  fundraising_ton_goal: Yup.number()
    .required('Введите поле')
    .min(1, 'Минимум 1')
    .max(1000000000000000, 'Максимум 1000000000000000'),
  project_category_id: Yup.number()
    .required('Выберите категорию'),
  is_project_global: boolean(),
  project_geo: Yup.string()
    .when('is_project_global', {
      is: false,
      then: (CreateProjectSchema) => CreateProjectSchema
        .required('Укажите город')
        .max(128, 'Максимально допустимое количество символов 128'),
    }),
  //.required('Введите название'),
  awards: Yup.array()
    .min(1, "Хотя бы одно вознаграждение")
    .of(
      Yup.object().shape({
        name: Yup.string()
          .max(60, 'Максимально допустимое количество символов 60')
          .required('Введите название'),
        description: Yup.string()
          .max(300, 'Максимально допустимое количество символов 300')
          .required('Введите описание'),
        amount_ton: Yup.number()
          .positive('Сумма должна быть больше 0')
          .max(1000000000000000, 'Максимум 1000000000000000')
          .required('Введите сумму'),
        phone_number: Yup.string()
          .max(17, 'Превышено допустимое количество символов'),
        need_delivery: Yup.boolean(),
        pickup_info: Yup.string()
          .when('need_delivery', {
            is: true,
            then: (CreateProjectSchema) => CreateProjectSchema
              .required('Укажите адрес и условия самовывоза')
              .max(300, 'Максимально допустимое количество символов 300'),
          })
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
    .matches(tonRegex, "Некорректный номер")
    .required('Введите номер кошелька'),
});