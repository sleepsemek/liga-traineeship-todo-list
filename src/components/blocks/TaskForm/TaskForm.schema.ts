import * as yup from 'yup';

export const taskFormSchema = yup
  .object()
  .shape({
    title: yup.string().required('Название задачи обязательно').max(50, 'Название должно быть короче 50 символов'),
    description: yup
      .string()
      .required('Описание задачи обязательно')
      .max(150, 'Описание должно быть короче 150 символов'),
    isImportant: yup.boolean(),
    isCompleted: yup.boolean(),
  })
  .test('important-not-completed', 'Нельзя отметить задачу важной, если она выполнена', (form) => {
    return !form.isCompleted || !form.isImportant;
  });
