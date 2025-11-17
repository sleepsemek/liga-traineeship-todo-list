import { TaskListProps } from 'components/blocks/TaskList/TaskList.types';
import { TaskItem } from 'components/blocks/TaskItem/TaskItem';

export function TaskList({ tasks }: TaskListProps) {
  return (
    <ul className="tasks__list">
      {tasks.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </ul>
  );
}
