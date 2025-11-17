import { TaskItemProps } from 'components/blocks/TaskItem/TaskItem.types';

export function TaskItem({ task }: TaskItemProps) {
  const { name, info, isImportant, isCompleted } = task;
  return (
    <li className="task">
      <h3 className="task__title">{name}</h3>
      <p className="task__description">{info}</p>

      <div className="task__controls">
        <label className="task__controls-label label label--inline">
          <input
            className="task__controls-input input"
            type="checkbox"
            aria-label={`Пометить задачу ${name} как важную`}
            checked={isImportant}
          />
          Важная
        </label>
        <label className="task__controls-label label label--inline">
          <input
            className="task__controls-input input"
            type="checkbox"
            aria-label={`Пометить задачу ${name} как завершенную`}
            checked={isCompleted}
          />
          Выполнена
        </label>
      </div>
      <button className="task__controls-button button" type="button" aria-label="Удалить задачу '${name}'">
        Удалить
      </button>
    </li>
  );
}
