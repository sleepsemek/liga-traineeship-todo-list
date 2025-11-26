import * as yup from 'yup';

export const taskFormSchema = yup
  .object()
  .shape({
    title: yup.string().required('Название задачи обязательно'),
    description: yup.string().required('Описание задачи обязательно'),
    isImportant: yup.boolean(),
    isCompleted: yup.boolean(),
  })
  .test('important-not-completed', 'Нельзя отметить задачу важной, если она выполнена', (value) => {
    return !(value.isCompleted && value.isImportant);
  });
