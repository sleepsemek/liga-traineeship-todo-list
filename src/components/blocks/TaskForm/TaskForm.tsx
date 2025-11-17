export function TaskForm() {
  return (
    <form className="create-task-form">
      <label className="create-task-form__label label">
        Название задачи
        <input type="text" name="name" className="create-task__form-input input" required />
      </label>

      <label className="create-task-form__label label">
        Описание задачи
        <textarea name="info" className="create-task-form__input input" required></textarea>
      </label>

      <label className="create-task-form__label label label--inline">
        <input type="checkbox" name="isImportant" className="create-task-form__input input" />
        Важная?
      </label>

      <button type="submit" className="create-task-form__button button">
        Создать задачу
      </button>
    </form>
  );
}
