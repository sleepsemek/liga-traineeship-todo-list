import { TaskList } from 'components/blocks/TaskList/';
import { Task } from 'types/Task';
import { TaskFilters } from 'components/blocks/TaskFilters';

export function TasksPage() {
  const tasks: Task[] = [
    {
      id: 0,
      name: 'task 1',
      info: 'task 1 info',
      isCompleted: false,
      isImportant: true,
    },
  ];

  return (
    <section aria-labelledby="task-list-header" className="section">
      <h2 id="task-list-header">Список задач</h2>
      <TaskFilters />
      <TaskList tasks={tasks} />
    </section>
  );
}
