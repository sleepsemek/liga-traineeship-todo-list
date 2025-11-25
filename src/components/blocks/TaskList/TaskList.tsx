import { Stack, Typography } from '@mui/material';
import { TaskListProps } from 'components/blocks/TaskList/TaskList.types';
import { TaskItem } from 'components/blocks/TaskItem/TaskItem';

export function TaskList({ tasks }: TaskListProps) {
  return (
    <Stack spacing={2}>
      {tasks.length === 0 && (
        <Typography component="h3" variant="h6" align="center">
          Тут ничего нет
        </Typography>
      )}

      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </Stack>
  );
}
