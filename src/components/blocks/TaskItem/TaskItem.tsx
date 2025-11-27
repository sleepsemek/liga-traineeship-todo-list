import { Card, CardContent, Typography, Stack, Chip, CardActions, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { TaskItemProps } from 'components/blocks/TaskItem/TaskItem.types';
import { useDeleteTaskMutation } from 'api/client';

export function TaskItem({ task }: TaskItemProps) {
  const { id, title, description, isImportant, isCompleted } = task;

  const navigate = useNavigate();
  const [deleteTask] = useDeleteTaskMutation();

  const onEditClick = () => navigate(`/task_form/${id}`);
  const onDeleteClick = () => {
    if (id) deleteTask({ id });
  };

  return (
    <Card component="article" variant="outlined">
      <CardContent>
        <Stack spacing={1}>
          <Typography component="h3" variant="h6" noWrap>
            {title || 'Без названия'}
          </Typography>
          <Stack direction="row" spacing={1}>
            {isImportant && <Chip size="small" label="Важная" />}
            {isCompleted && <Chip size="small" label="Выполнена" />}
          </Stack>
          <Typography variant="body2" noWrap>
            {description || 'Без описания'}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Button onClick={onEditClick} variant="contained">
          Изменить
        </Button>
        <Button onClick={onDeleteClick} color="error">
          Удалить
        </Button>
      </CardActions>
    </Card>
  );
}
